class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :time
      t.string :place
      t.string :type
      t.string :regLink

      t.timestamps
    end
  end
end
