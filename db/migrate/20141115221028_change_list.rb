class ChangeList < ActiveRecord::Migration
  def change
    change_column_default(:lists, :ord, nil)
  end
end
