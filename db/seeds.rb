# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Video.destroy_all
Genre.destroy_all

require 'open-uri'

demoUser = User.create!(email: "mohamed@gmail.com", password: "mohamed")

# genres seeds

horror = Genre.create(name:"Horror")
comedy = Genre.create(name:"Comedy")
action = Genre.create(name:"Action")
crime = Genre.create(name:"Crime")

# videos seeds 

laws_of_the_universe = Video.create(title: "Laws of the Universe", description: "An inmate is trapped in his prison cell after an extraordinary circumstance happens beyond his prison walls. With outside forces threatening the ones he loves, he will do anything it takes to escape.", video_type: "movie", year: 2020, length: 60, genre_id: crime.id)
the_black_hole = Video.create(title: "The Black Hole", description: "An office drone (Napoleon Ryan) finds a mysterious piece of paper that allows him to pass through solid objects, so he takes advantage of this new power.", video_type: "movie", year: 2017, length: 80, genre_id: horror.id)
darkseid_war = Video.create(title: "Darkseid War", description: "Justice League Dark: Apokolips War is a 2020 American direct-to-video adult animated science fantasy superhero film produced by Warner Bros. Animation and distributed by Warner Home Video and loosely based on the story arc Darkseid War by Geoff Johns.", video_type: "movie", year: 2017, length: 80, genre_id: horror.id)
mr_peabody_and_sherman = Video.create(title: "MR. Peabody and Sherman", description: "Mr. Peabody & Sherman is a 2014 American computer-animated science fiction comedy film based on characters from the Peabody's Improbable History segments of the animated television series The Rocky and Bullwinkle Show, produced by DreamWorks Animation and distributed by 20th Century Fox.", video_type: "movie", year: 2014, length: 80, genre_id: comedy.id)
connected = Video.create(title: "Connected", description: "Connected is an upcoming American computer-animated science fiction comedy film produced by Sony Pictures Animation.", video_type: "movie", year: 2015, length: 80, genre_id: comedy.id)
smiling_woman = Video.create(title: "Smiling Woman", description: "On a late night at an empty train station, a lone traveler is terrorized by a creepy smiling woman.", video_type: "movie", year: 2019, length: 80, genre_id: horror.id)
sponge_pop = Video.create(title: "Sponge Pop", description: "The SpongeBob Movie: Sponge on the Run is an upcoming American live-action/computer-animated adventure comedy film based on the animated television series SpongeBob SquarePants.", video_type: "movie", year: 2019, length: 80, genre_id: comedy.id)
shorts = Video.create(title: "Shorts", description: "Shorts is set in the suburb of Black Falls, where all the houses look the same and everyone works for BLACK BOX Unlimited Worldwide Industries Incorporated", video_type: "movie", year: 2009, length: 80, genre_id: action.id)

#creating video files from files url
 
laws_of_the_universe_video = open('https://nasflix-seeds.s3-us-west-1.amazonaws.com/lawsoftheuniverse.mp4')
the_black_hole_video = open('https://nasflix-seeds.s3-us-west-1.amazonaws.com/theblackhole.mp4')
darkseid_war_video = open('https://nasflix-seeds.s3-us-west-1.amazonaws.com/darkseidwar.mp4')
mr_peabody_and_sherman_video = open('https://nasflix-seeds.s3-us-west-1.amazonaws.com/sherman.mp4')
connected_video = open('https://nasflix-seeds.s3-us-west-1.amazonaws.com/connected.mp4')
smiling_woman_video = open('https://nasflix-seeds.s3-us-west-1.amazonaws.com/smilingwoman.mp4')
sponge_pop_video = open('https://nasflix-seeds.s3-us-west-1.amazonaws.com/spongepop.mp4')
shorts_video = open('https://nasflix-seeds.s3-us-west-1.amazonaws.com/shorts.mp4')

# attach videos urls to videos

laws_of_the_universe.video_url.attach(io: laws_of_the_universe_video, filename: "lawsoftheuniverse.mp4")
the_black_hole.video_url.attach(io: the_black_hole_video, filename: "theblackhole.mp4")
darkseid_war.video_url.attach(io: darkseid_war_video, filename: "darkseidwar.mp4") 
mr_peabody_and_sherman.video_url.attach(io: mr_peabody_and_sherman_video, filename: "sherman.mp4")
connected.video_url.attach(io: connected_video, filename: "connected.mp4")
smiling_woman.video_url.attach(io: smiling_woman_video, filename: "smilingwoman.mp4")
sponge_pop.video_url.attach(io: sponge_pop_video, filename: "spongepop.mp4")
shorts.video_url.attach(io: shorts_video, filename: "shorts.mp4")


