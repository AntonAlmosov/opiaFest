class CreateDays < ActiveRecord::Migration[6.0]
  def change
    create_table :days do |t|
      t.string :title

      t.timestamps
    end
  end
end
