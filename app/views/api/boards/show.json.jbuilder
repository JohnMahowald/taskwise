json.(@board, :title, :id)

json.lists @board.lists do |list|
  json.(list, :title, :board_id, :ord, :id)
  json.cards list.cards do |card|
    json.(card, :title, :description, :ord, :id)
  end
end


