if (!Victor) {
}

(function(proto) {
  /**
   * X与Y同时放大N倍
   * @param  {[Number]} times [放大的倍数]
   */
  proto.multi = function(times) {
    this.x = this.x * times;
    this.y = this.y * times;
    return this;
  };

  /**
   * X与Y同时除以N
   * @param  {[Number]} num [被除数]
   */
  proto.div = function(num) {
    this.x = this.x / num;
    this.y = this.y / num;
    return this;
  };

  // proto.dist = function (v1, v2) {
  // 	return v1.clone().subtract(v2.clone());
  // }

  /**
   * 两个矢量相减，原矢量不变，返回差为新值
   * @param  {[Object/Victor]} target [被减数]
   * @return {[Object/Victor]}        [差]
   */
  proto.sub = function(target) {
    return this.clone().subtract(target);
  };

  proto.ad = function(target) {
    return this.clone().add(target);
  };

  proto.limitDimension = function(max) {
    if (Math.abs(this.x) >= max) {
      this.x = max * (this.x > 0 ? 1 : -1);
    }
    if (Math.abs(this.y) >= max) {
      this.y = max * (this.y > 0 ? 1 : -1);
    }
  };
})(Victor.prototype);
