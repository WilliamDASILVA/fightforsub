class CreateStreamers < ActiveRecord::Migration[5.0]
  def change
    create_table :streamers do |t|
      t.string :channel
      t.references :user, index: true, foreign_key: true
      t.timestamps
    end
  end
end
