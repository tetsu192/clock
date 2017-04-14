class ClockController < ApplicationController

  def index
    @selects = Select.all
  end

  def create
    Select.create(id: params[:id] ,first_time: params[:first_time],finish_time: params[:finish_time],text: params[:text])
    @selects = Select.all
  end

  def destroy
    select = Select.find(params[:id])
    select.destroy
    # @selects = Select.all
  end

 def new
 end

 def edit
 end

end
