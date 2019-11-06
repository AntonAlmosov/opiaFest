class FestController < ApplicationController
  def index
  end

  def edit
  end

  def getData
    days = Day.all

    respond_to do |format|
      res = []
      days.each do |day|
        res.push({title: day.title, events: day.events})
      end
      msg = { :status => "ok", :response => res }
      format.json  { render :json => msg } 
    end
  end
end
