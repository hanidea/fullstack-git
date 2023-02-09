'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg firstapp';
  }

  async demo() {
    const { ctx } = this;
    ctx.body = 'hi, demo';
  }
}

module.exports = HomeController;
