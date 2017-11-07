'use strict';

module.exports = (app) => {
  return class extends app.Controller {
    async showIndex () {
      const { ctx } = this,
            { url } = this.ctx.query;
      let result    = await app.curl(
          url, {
            streaming: true,
            timeout  : [1000, 30000]
          }
      );
      
      ctx.status = result.status;
      ctx.set(result.headers);
      ctx.body = result.res;
    }
  };
};
