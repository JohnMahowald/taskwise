user1 = User.create!(email: 'john@me.com', password: 'johnjohn')

board1 = user1.boards.create!(title: 'Workout')
board2 = user1.boards.create!(title: 'Jamaica')

list1 = board1.lists.create!(title: 'todo')
list2 = board1.lists.create!(title: 'doing')
list3 = board1.lists.create!(title: 'done')

card1 = list1.cards.create!(title: 'squats', description: 'feel the burn')
card2 = list1.cards.create!(title: 'pushups', description: 'ooh ouch')
card3 = list1.cards.create!(title: 'situps', description: 'ouchy')

card4 = list2.cards.create!(title: 'squats', description: 'feel the burn')
card5 = list2.cards.create!(title: 'pushups', description: 'ooh ouch')
card6 = list2.cards.create!(title: 'situps', description: 'ouchy')

card7 = list3.cards.create!(title: 'squats', description: 'feel the burn')
card8 = list3.cards.create!(title: 'pushups', description: 'ooh ouch')
card9 = list3.cards.create!(title: 'situps', description: 'ouchy')