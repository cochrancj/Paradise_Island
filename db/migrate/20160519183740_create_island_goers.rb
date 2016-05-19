class CreateIslandGoers < ActiveRecord::Migration
  def change
    create_table :island_goers do |t|

    t.string :name
    t.string :address
    t.string :avatar
    t.string :email
    
    t.timestamps null: false
    end
  end
end
