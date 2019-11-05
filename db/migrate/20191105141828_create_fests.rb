class CreateFests < ActiveRecord::Migration[6.0]
  def change
    create_table :fests do |t|
      t.string :desc

      t.timestamps
    end
  end
end
