class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :day_id
      t.string :title
      t.string :time
      t.string :desc
      t.string :place
      t.string :eType
      t.string :regLink
      t.string :guest

      t.timestamps
    end
  end
end
