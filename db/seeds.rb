# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

firstDay1 = Event.create({eType: 'Дискуссия', title: 'Соучастие в городе', time: '17:00 -18:30'})
firstDay2 = Event.create({eType: 'Фильм', title: 'Невидимая стена (1988, 2006)', time: '19:00 -21:30'})

let firstDay = Day.create(title: '19 ноября', events: [firstDay1, firstDay2])
firstDay.save