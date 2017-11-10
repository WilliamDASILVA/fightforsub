class CreateSeasons < ActiveRecord::Migration[5.0]
  def change
    create_table :seasons do |t|
      t.datetime :begin_at
      t.integer :status
      t.timestamps
    end
  end
end
