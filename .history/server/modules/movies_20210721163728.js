
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MoviesSchema = new Schema({
    phim: {
        phimbo: [
            {
                title: {
                    type: String,
                    required: true
                },
                description: {
                    type: String
                },
                url: {
                    type: String
                },
                status: {
                    type: String,
                    enum: ['PHIM HÀNH ĐỘNG',
                        'PHIM KIẾM HIỆP',
                        'PHIM TÌNH CẢM',
                        'PHIM HOẠT HÌNH'
                    ]
                },
                images: {
                    type: String,
                },
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'users'
                }
            }
        ],
        phimle: [
            {
                title: {
                    type: String,
                    required: true
                },
                description: {
                    type: String
                },
                url: {
                    type: String
                },
                status: {
                    type: String,
                    enum: ['PHIM HÀNH ĐỘNG',
                        'PHIM KIẾM HIỆP',
                        'PHIM TÌNH CẢM',
                        'PHIM HOẠT HÌNH'
                    ]
                },
                images: {
                    type: String,
                },
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'users'
                }
            }
        ],
        phimchieurap: [
            {
                title: {
                    type: String,
                    required: true
                },
                description: {
                    type: String
                },
                url: {
                    type: String
                },
                status: {
                    type: String,
                    enum: ['PHIM HÀNH ĐỘNG',
                        'PHIM KIẾM HIỆP',
                        'PHIM TÌNH CẢM',
                        'PHIM HOẠT HÌNH'
                    ]
                },
                images: {
                    type: String,
                },
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'users'
                }
            }
        ],
        phimhoathinh: [
            {
                title: {
                    type: String,
                    required: true
                },
                description: {
                    type: String
                },
                url: {
                    type: String
                },
                status: {
                    type: String,
                    enum: ['PHIM HÀNH ĐỘNG',
                        'PHIM KIẾM HIỆP',
                        'PHIM TÌNH CẢM',
                        'PHIM HOẠT HÌNH'
                    ]
                },
                images: {
                    type: String,
                },
                user: {
                    type: Schema.Types.ObjectId,
                    ref: 'users'
                }
            }
        ],
    }
})

module.exports = mongoose.model('movies', MoviesSchema)