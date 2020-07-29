# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#  video_id   :integer          not null
#
# Indexes
#
#  index_lists_on_user_id   (user_id)
#  index_lists_on_video_id  (video_id)
#
require 'test_helper'

class ListTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
