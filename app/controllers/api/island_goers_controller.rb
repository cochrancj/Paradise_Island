class Api::IslandGoersController < ApplicationController

  def index
    render json: { island_goers: IslandGoer.all }
  end

  def create
    # take the params and create a new island_goer,
    # if it works, send the user as JSON back to your front end code
    # otherwise send an error object

    new_guest = IslandGoer.create({
                  name: allowedParams[:name],
                  postcode: allowedParams[:postcode],
                  country: allowedParams[:country],
                  email: allowedParams[:email],
                  avatar: Faker::Avatar.image
                })
    # this is what controls what i get back i can get tacos
    render json: { island_goer: new_guest }

  end

  # def delete
  #   IslandGoer.delete
  # end

  private

  def allowedParams
    # whitelist your params
    params.require(:island_goer).permit(:name, :postcode, :country, :email)
  end

end
