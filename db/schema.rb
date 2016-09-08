# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160908161509) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "image_id",   null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["image_id"], name: "index_comments_on_image_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "follows", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.integer  "following_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["following_id"], name: "index_follows_on_following_id", using: :btree
    t.index ["user_id"], name: "index_follows_on_user_id", using: :btree
  end

  create_table "images", force: :cascade do |t|
    t.string   "image_url",              null: false
    t.text     "caption"
    t.integer  "user_id",                null: false
    t.float    "lat",                    null: false
    t.float    "lng",                    null: false
    t.integer  "num_likes",  default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
    t.index ["user_id"], name: "index_images_on_user_id", using: :btree
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "image_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["image_id"], name: "index_likes_on_image_id", using: :btree
    t.index ["user_id"], name: "index_likes_on_user_id", using: :btree
  end

  create_table "notifications", force: :cascade do |t|
    t.integer  "user_id",                                                                                                   null: false
    t.string   "notification",                                                                                              null: false
    t.string   "url"
    t.boolean  "read",         default: false
    t.string   "image_url",    default: "https://pixabay.com/static/uploads/photo/2012/04/13/00/21/plus-31216_960_720.png"
    t.datetime "created_at",                                                                                                null: false
    t.datetime "updated_at",                                                                                                null: false
    t.index ["user_id"], name: "index_notifications_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "username",        null: false
    t.string   "full_name",       null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "image_url"
    t.text     "bio"
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end
