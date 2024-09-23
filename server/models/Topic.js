const mongoose = require("mongoose");
const slugify = require("slugify");

const TopicSchema = mongoose.Schema(
    {
        topic_name: {
            type: String,
            required: [true, "Please enter content!"],
            unique: true,
        },
        slug: {
            type: String,
            unique: true,
        },
    },
    {
        timestamps: true,
    }
);

TopicSchema.pre("validate", function (next) {
    this.slug = slugify(this.topic_name, {
        lower: true,
        strict: true, // harf olmayan karakterleri eş geçmesini sağlıyor
    });
    next();
});

const Topic = mongoose.model("Topic", TopicSchema);
module.exports = Topic;
