class CreateSeasonsStreamers < ActiveRecord::Migration[5.0]
  def change
    create_table :seasons_streamers do |t|
      t.belongs_to :season, index: true
      t.belongs_to :streamer, index: true
    end
  end
end
