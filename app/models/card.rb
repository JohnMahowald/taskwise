# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  list_id     :integer          not null
#  description :text
#  ord         :float
#  created_at  :datetime
#  updated_at  :datetime
#

class Card < ActiveRecord::Base
  before_validation :ensure_ord
  belongs_to :list
  has_many :items, dependent: :destroy
  has_many :card_assignments, dependent: :destroy

  default_scope { order(:ord) }
  
  private
  
  def ensure_ord
    self.ord ||= self.list.cards.count
  end
end
