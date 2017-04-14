class AddRateToSelects < ActiveRecord::Migration
  def change
    add_column :selects, :text, :text
  end
end
