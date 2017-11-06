'use strict';
module.exports = app => {
  return class extends app.Controller {
    async index () {
      const { url }   = this.ctx.query;
      let result      = await app.curl(
          url
      );
      this.ctx.status = result.status;
      this.ctx.set(result.headers);
      this.ctx.body = result.data;
    }
  };
};
