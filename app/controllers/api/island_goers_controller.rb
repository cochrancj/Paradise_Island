class Api::IslandGoersController < ApplicationController

  def index
    render json: { island_goers: IslandGoer.all }
  end

end
