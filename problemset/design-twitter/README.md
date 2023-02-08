# 设计推特

> 难度：中等
>
> https://leetcode-cn.com/problems/design-twitter/

## 题目

设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近 10 条推文。

实现 `Twitter` 类：

- `Twitter()` 初始化简易版推特对象
- `void postTweet(int userId, int tweetId)` 根据给定的 `tweetId` 和 `userId` 创建一条新推文。每次调用此函数都会使用一个不同的 `tweetId` 。
- `List<Integer> getNewsFeed(int userId)` 检索当前用户新闻推送中最近  10 条推文的 `ID` 。新闻推送中的每一项都必须是由用户关注的人或者是用户自己发布的推文。推文必须 **按照时间顺序由最近到最远排序** 。
- `void follow(int followerId, int followeeId)` `ID` 为 `followerId` 的用户开始关注 `ID` 为 `followeeId` 的用户。
- `void unfollow(int followerId, int followeeId)` `ID` 为 `followerId` 的用户不再关注 `ID` 为 `followeeId` 的用户。
 

### 示例：

```
输入
["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
[[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
输出
[null, null, [5], null, null, [6, 5], null, [5]]

解释
Twitter twitter = new Twitter();
twitter.postTweet(1, 5); // 用户 1 发送了一条新推文 (用户 id = 1, 推文 id = 5)
twitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含一个 id 为 5 的推文
twitter.follow(1, 2);    // 用户 1 关注了用户 2
twitter.postTweet(2, 6); // 用户 2 发送了一个新推文 (推文 id = 6)
twitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含两个推文，id 分别为 -> [6, 5] 。推文 id 6 应当在推文 id 5 之前，因为它是在 5 之后发送的
twitter.unfollow(1, 2);  // 用户 1 取消关注了用户 2
twitter.getNewsFeed(1);  // 用户 1 获取推文应当返回一个列表，其中包含一个 id 为 5 的推文。因为用户 1 已经不再关注用户 2
```

## 解题

```ts
/**
 * 哈希表
 */
export class Twitter {
  users = new Map<number, TwitterUser>()

  postTweet(userId: number, tweetId: number): void {
    this.getUser(userId).postTweet(tweetId)
  }

  getNewsFeed(userId: number): number[] {
    if (!this.users.has(userId)) return []

    const limit = 10
    const user = this.users.get(userId)!
    const tweets = user.getTweets(limit)
    const follows = user.follows
    if (follows.size > 0) {
      for (const follow of follows) {
        if (!this.users.has(follow)) continue
        tweets.push(...this.users.get(follow)!.getTweets(limit))
      }
    }

    return tweets.sort((a, b) => b.createAt - a.createAt)
      .filter((_, i) => i < limit)
      .map(i => i.id)
  }

  follow(followerId: number, followeeId: number): void {
    this.getUser(followerId).follow(followeeId)
  }

  unfollow(followerId: number, followeeId: number): void {
    this.getUser(followerId).unfollow(followeeId)
  }

  private getUser(userId: number): TwitterUser {
    if (!this.users.has(userId))
      this.users.set(userId, new TwitterUser(userId))
    return this.users.get(userId)!
  }
}

interface Tweet {
  id: number
  createAt: number
}

class TwitterUser {
  private tweets: Tweet[] = []
  public follows = new Set<number>()
  static CREATE_AT_TIME_STAMP = 0

  constructor(
    public userId: number,
  ) {}

  postTweet(tweetId: number): void {
    this.tweets.push({
      id: tweetId,
      createAt: this.nextStamp(),
    })
  }

  follow(followeeId: number): void {
    if (followeeId === this.userId) return
    this.follows.add(followeeId)
  }

  unfollow(followeeId: number): void {
    this.follows.delete(followeeId)
  }

  getTweets(limit = 10): Tweet[] {
    const end = this.tweets.length
    const start = end - limit < 0 ? 0 : end - limit
    return this.tweets.slice(start, end)
  }

  private nextStamp() {
    return TwitterUser.CREATE_AT_TIME_STAMP++
  }
}
```