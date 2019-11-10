class FestController < ApplicationController

  skip_before_action :verify_authenticity_token

  def index
  end


  def editData
  end

  def getDescription
    if !Description.first
      desc = Description.new()
      desc.desc = ''
      desc.save
    end
    desc = Description.first
    respond_to do |format|
    msg = { :status => "ok", :desc => desc.desc }
      format.json  { render :json => msg } 
    end
  end

  def handleDescription
    desc = Description.first()
    desc.desc = params[:value]
    if desc.save
      respond_to do |format|
        format.json {render json: {status: 'ok'}}
      end
    end
  end

  def getMembers
    members = TeamMember.all()
    collection = []

    members.each do |member|
      obj = {}
      if member.picture.attached?
        obj = {id: member.id, name: member.name, pic: rails_blob_path(member.picture, disposition: "attachment", only_path: true), teamRole: member.teamRole, desc: member.desc}
      else 
        obj = {id: member.id, name: member.name, pic: 'none', teamRole: member.teamRole, desc: member.desc}
      end
      collection.push(obj)
    end

    respond_to do |format|
      format.json {render json: {status: 'ok', users: collection}}
    end
  end

  def handleMember
    member = TeamMember.find(params[:id])
    member[params[:type]] = params[:value]
    if member.save
      render json: {status: 'ok', member: member}
    end
  end

  def handleMemberCreation
    member = TeamMember.new()
    if member.save
      render json: {status: 'ok'}
    end
  end

  def handleMemberUpload
    member = TeamMember.find(params[:id])
    member.picture = params[:image]
       if member.save
         render json: {status: 'ok'}
       else
         render json: @document.errors, status: :unprocessable_entity
       end
  end

  def deleteMember
    member = TeamMember.find(params[:id])
    if member.destroy
      render json: {status: 'ok'}
    end
  end

  def createDay
    day = Day.new()
    if day.save
      render json: {status: 'ok'}
    end
  end

  def deleteDay 
    day = Day.find(params[:id])
    day.events.each do |e|
      e.destroy
    end
    day.destroy
  end

  def createEvent
    day = Day.find(params[:day_id])
    event = day.events.new()
    event.save
  end

  def deleteEvent
    event = Event.find(params[:id])
    event.destroy
  end

  def handleUpload
    event = Event.find(params[:id])
    event.cover_picture = params[:image]
       if event.save
         render json: {status: 'ok'}
       else
         render json: @document.errors, status: :unprocessable_entity
       end
  end

  def handleForm
    type = params[:type]
    value = params[:value]

    if type == 'dayTitle'
      day = Day.find(params[:id])
      day.title = value
      day.save
    else
      event = Event.find(params[:id])
      event[type] = value
      event.save
    end
  end


  def getData
    days = Day.all

    respond_to do |format|
      res = []
      days.sort_by(&:created_at)
      days.each do |day|
        events = []
        day.events.order(:created_at)
        day.events.each do |e|
          if e.cover_picture.attached?
            events.push({event: e, pic: rails_blob_path(e.cover_picture, disposition: "attachment", only_path: true)})
          else 
            events.push({event: e, pic: 'none'})
          end
        end
        res.push({id: day.id, title: day.title, events: events})
      end
      msg = { :status => "ok", :response => res }
      format.json  { render :json => msg } 
    end
  end

  private
       def image_params
         params.permit(files: []) # permit the files parameter.
       end
end
