var mongoose = require('../db');
var Schema = mongoose.Schema;

var chapterSchema = new Schema({
    moocId: String,
    week: Number,
    chapter: Number,
    title: String,
    content: String,
    meta: {
        updateAt: {type:Date, default: Date.now()},
        createAt: {type:Date, default: Date.now()}
    }
});

var moocSchema = new Schema({
    moocName: String,
    teacher: String,
    moocThumb: String,
    meta: {
        updateAt: {type:Date, default: Date.now()},
        createAt: {type:Date, default: Date.now()}
    },
    children: [chapterSchema],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

moocSchema.pre('save', function (next) {
    if(this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    }else{
        this.meta.updateAt = Date.now();
    }
    next();
})

module.exports = mongoose.model('Mooc', moocSchema);

