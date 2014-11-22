user1 = User.create!(email: 'john@me.com', password: 'johnjohn')

board1 = user1.boards.create!(title: 'Workout')

list1 = board1.lists.create!(title: 'Todo')
list2 = board1.lists.create!(title: 'Doing')
list3 = board1.lists.create!(title: 'Done')

card1 = list1.cards.create!(title: 'Squats', description: 'feel the burn')
card2 = list1.cards.create!(title: 'Pushups', description: 'ooh ouch')
card3 = list1.cards.create!(title: 'Situps', description: 'ouchy')

card4 = list2.cards.create!(title: 'Pullups', description: 'feel the burn')
card5 = list2.cards.create!(title: 'Push Press', description: 'ooh ouch')
card6 = list2.cards.create!(title: 'Clean & Jerk', description: 'ouchy')

card7 = list3.cards.create!(title: 'Power Cleans', description: 'feel the burn')
card8 = list3.cards.create!(title: 'L Hangs', description: 'ooh ouch')
card9 = list3.cards.create!(title: 'Jumping Jacks', description: 'ouchy')