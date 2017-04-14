class CreateSelects < ActiveRecord::Migration
  def change
    create_table :selects do |t|
      t.integer    :first_time
      t.integer    :finish_time

      t.timestamps
    end
  end
end
