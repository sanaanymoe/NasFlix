# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  length      :integer          not null
#  title       :string           not null
#  type        :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  genre_id    :integer          not null
#
# Indexes
#
#  index_videos_on_genre_id  (genre_id)
#  index_videos_on_title     (title)
#  index_videos_on_type      (type)
#
class Video < ApplicationRecord
    validates :title, :description, :length, :year, :type, :genre_id, presence: true
    validates :type, inclusion: {in: ["movie", "show"]}

    belongs_to :genre,
        primary_key: :id,
        foreign_key: :genre_id,
        class_name: :Genre

    has_one_attatched :video 
end
