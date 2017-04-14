Rails.application.routes.draw do
  root 'clock#index'
  # get 'clock'        => 'clock#index'
  # post 'clock' => 'clock#create'
  # delete 'clock/delete' => 'clock#destroy'
  # get 'clock/new' => 'clock#new'
  # post 'clock/new' => 'clock/new'
  # post 'clock/#{@selects.id}'  => 'clock#destroy'
  resources :clock, only: [:index, :create, :destroy, :new, :edit]
end
