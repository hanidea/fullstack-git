'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.user.detail(20);
    console.log(res);
    ctx.body = res;
  }

  async demo() {
    const { ctx } = this;
    ctx.body = 'hi, demo';
  }
}

module.exports = HomeController;
