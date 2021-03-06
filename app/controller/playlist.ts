import { Controller } from 'egg';

import { Default_Offset, Default_Limit } from '../utils/common';

export default class ArtistController extends Controller {
  /**
   * @description 获取歌单 分类列表
   */
  public async getPlaylistCategorys() {
    const { ctx } = this;
    ctx.body = await ctx.service.playlist.getPlaylistCategorys();
  }

  /**
   * @description 创建歌单
   */
  public async postPlaylistCreate() {
    const { ctx } = this;
    const { name, privacy } = ctx.request.body;
    ctx.body = await ctx.service.playlist.postPlaylistCreate({
      name,
      privacy,
    });
  }

  /**
   * @description 删除歌单
   */
  public async deletePlaylist() {
    const { ctx } = this;
    const { pid } = ctx.request.body;
    ctx.body = await ctx.service.playlist.deletePlaylist({
      pid,
    });
  }

  /**
   * @description 更新歌单描述
   */
  public async updatePlaylistDes() {
    const { ctx } = this;
    const { pid, description } = ctx.request.body;
    ctx.body = await ctx.service.playlist.updatePlaylistDes({
      pid,
      description,
    });
  }

  /**
   * @description 获取歌单详情
   */
  public async getPlaylistDetail() {
    const { ctx } = this;
    const { pid, subNum } = ctx.query;
    ctx.body = await ctx.service.playlist.getPlaylistDetail({
      pid,
      subNum,
    });
  }

  /**
   * @description 获取热门歌单
   */
  public async getHotPlaylist() {
    const { ctx } = this;
    ctx.body = await ctx.service.playlist.getHotPlaylist();
  }

  /**
   * @description 更新歌单名
   */
  public async updatePlaylistName() {
    const { ctx } = this;
    const { pid, name } = ctx.request.body;
    ctx.body = await ctx.service.playlist.updatePlaylistName({
      pid,
      name,
    });
  }

  /**
   * @description 订阅 ｜ 取消订阅 歌单
   */
  public async postPlaylistSub() {
    const { ctx } = this;
    const { pid, actionType } = ctx.params;
    ctx.body = await ctx.service.playlist.postPlaylistSub({
      pid,
      actionType,
    });
  }

  /**
   * @description 获取歌单订阅者
   */
  public async getPlaylistSubcribers() {
    const { ctx } = this;
    const { pid } = ctx.params;
    const { offset = Default_Offset, limit = Default_Limit } = ctx.request.body;
    ctx.body = await ctx.service.playlist.getPlaylistSubcribers({
      pid,
      offset,
      limit,
    });
  }

  /**
   * @description 更新歌单标签
   */
  public async updatePlaylistTags() {
    const { ctx } = this;
    const { pid } = ctx.params;
    const { tags } = ctx.request.body;
    ctx.body = await ctx.service.playlist.updatePlaylistTags({
      pid,
      tags,
    });
  }

  /**
   * @description 添加歌单歌曲
   */
  public async addPlaylistSongs() {
    const { ctx } = this;
    const { pid } = ctx.params;
    const { songIds } = ctx.request.body;
    ctx.body = await ctx.service.playlist.addPlaylistSongs({
      pid,
      songIds,
    });
  }

  /**
   * @description 删除歌单歌曲
   */
  public async deletePlaylistSongs() {
    const { ctx } = this;
    const { pid } = ctx.params;
    const { songIds } = ctx.request.body;
    ctx.body = await ctx.service.playlist.deletePlaylistSongs({
      pid,
      songIds,
    });
  }

  /**
   * @description 更新歌单
   */
  public async updatePlaylist() {
    const { ctx } = this;
    const { pid } = ctx.params;
    const { description, tags } = ctx.request.body;
    ctx.body = await ctx.service.playlist.updatePlaylist({
      pid,
      description,
      tags,
    });
  }
}
