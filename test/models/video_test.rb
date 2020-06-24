# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  length      :integer          not null
#  title       :string           not null
#  video_type  :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  genre_id    :integer          not null
#
# Indexes
#
#  index_videos_on_genre_id    (genre_id)
#  index_videos_on_title       (title)
#  index_videos_on_video_type  (video_type)
#
require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
