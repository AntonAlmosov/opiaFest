class Event < ApplicationRecord
  default_scope { order(:created_at) }
  belongs_to :day
  has_one_attached :cover_picture
end
