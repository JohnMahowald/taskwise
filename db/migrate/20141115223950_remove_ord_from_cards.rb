class RemoveOrdFromCards < ActiveRecord::Migration
  def change
    change_column_default(:cards, :ord, nil)
  end
end
