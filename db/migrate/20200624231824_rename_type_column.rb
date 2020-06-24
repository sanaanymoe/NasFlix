class RenameTypeColumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :videos, :type, :video_type
  end
end
