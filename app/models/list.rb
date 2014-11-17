# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  board_id   :integer          not null
#  ord        :float
#  created_at :datetime
#  updated_at :datetime
#

class List < ActiveRecord::Base
  before_validation :ensure_ord
  validates :title, :board, :ord, presence: true

  belongs_to :board
  has_many :cards, dependent: :destroy

  default_scope { order(:ord) }
  
  private
  
  def ensure_ord
    self.ord ||= self.board.lists.count
  end
end
