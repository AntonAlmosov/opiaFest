class Event < ApplicationRecord
  belongs_to :day
  has_one_attached :cover_picture
end
