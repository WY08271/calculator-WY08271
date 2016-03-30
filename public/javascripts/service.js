function Service() {
    this.one;
    this.two;
    this.symbol;
    this.single;
}

Service.prototype.opposite = function(service, callback) {
    $.ajax({
        type: 'POST',
        url: '/opposite',
        data: { single: this.single }
    })
        .done(function(result) {
            callback(result);
        });
};

Service.prototype.percent = function(service, callback) {
    $.ajax({
        type: 'POST',
        url: '/percent',
        data: { single: this.single }
    })
        .done(function(result) {
            callback(result);
        });
};

Service.prototype.add = function(service, callback) {
    $.ajax({
        url: '/add',
        type: 'POST',
        data: { one: this.one, two: this.two }
    }).done(function(result) {
        callback(result);
    });
};

Service.prototype.cut = function(service, callback) {
    $.ajax({
        type: 'POST',
        url: '/cut',
        data: { one: this.one, two: this.two }
    })
        .done(function(result) {
            callback(result);
        });
};

Service.prototype.multiply = function(service, callback) {
    $.ajax({
        type: 'POST',
        url: '/multiply',
        data: { one: this.one, two: this.two }
    })
        .done(function(result) {
            callback(result);
        });
};

Service.prototype.divide = function(service, callback) {
    $.ajax({
        type: 'POST',
        url: '/divide',
        data: { one: this.one, two: this.two }
    })
        .done(function(result) {
            callback(result);
        });
};