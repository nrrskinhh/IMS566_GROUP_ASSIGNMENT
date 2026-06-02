
// save data in format JSON format
function saveData() {
    const rooms = getRoomsData();
    const bookings = getBookingsData();
    localStorage.setItem('easton_rooms_json', JSON.stringify(rooms));
    localStorage.setItem('easton_bookings_json', JSON.stringify(bookings));
}

// rooms data
function getRoomsData() {
    const saved = localStorage.getItem('easton_rooms_json');
    if (saved) return JSON.parse(saved);
    return [
        { id: 'room-101', no: '101', type: 'Deluxe King', price: 120, status: 'Available' },
        { id: 'room-102', no: '102', type: 'Standard Twin', price: 90, status: 'Occupied' },
        { id: 'room-201', no: '201', type: 'Suite Ocean', price: 250, status: 'Maintenance' },
        { id: 'room-202', no: '202', type: 'Standard Twin', price: 90, status: 'Available' },
        { id: 'room-203', no: '203', type: 'Deluxe King', price: 120, status: 'Available' },
        { id: 'room-204', no: '204', type: 'Suite Ocean', price: 250, status: 'Occupied' },
        { id: 'room-205', no: '205', type: 'Standard Twin', price: 90, status: 'Available' },
        { id: 'room-206', no: '206', type: 'Deluxe King', price: 120, status: 'Available' },
        { id: 'room-207', no: '207', type: 'Suite Ocean', price: 250, status: 'Available' },
        { id: 'room-208', no: '208', type: 'Standard Twin', price: 90, status: 'Available' },
        { id: 'room-209', no: '209', type: 'Deluxe King', price: 120, status: 'Occupied' },
        { id: 'room-210', no: '210', type: 'Suite Ocean', price: 250, status: 'Available' },
        { id: 'room-211', no: '211', type: 'Standard Twin', price: 90, status: 'Available' },
        { id: 'room-212', no: '212', type: 'Deluxe King', price: 120, status: 'Available' },
        { id: 'room-213', no: '213', type: 'Suite Ocean', price: 250, status: 'Maintenance' },
        { id: 'room-214', no: '214', type: 'Standard Twin', price: 90, status: 'Available' },
        { id: 'room-215', no: '215', type: 'Deluxe King', price: 120, status: 'Available' },
        { id: 'room-216', no: '216', type: 'Suite Ocean', price: 250, status: 'Available' },
        { id: 'room-217', no: '217', type: 'Standard Twin', price: 90, status: 'Available' },
        { id: 'room-218', no: '218', type: 'Deluxe King', price: 120, status: 'Available' },
        { id: 'room-219', no: '219', type: 'Suite Ocean', price: 250, status: 'Available' },
        { id: 'room-220', no: '220', type: 'Standard Twin', price: 90, status: 'Available' },
        { id: 'room-221', no: '221', type: 'Deluxe King', price: 120, status: 'Available' }
    ];
}

// bookings data
function getBookingsData() {
    const saved = localStorage.getItem('easton_bookings_json');
    if (saved) return JSON.parse(saved);
    return [
        { id: 'bk1', code: '#BK-001', guest: 'Marsya Adriana binti Mohamad Rafezi', type: 'Deluxe King', date: '2026-01-01', status: 'Confirmed', amount: 120 },
        { id: 'bk2', code: '#BK-002', guest: 'Tan Jun Hao', type: 'Standard Twin', date: '2026-01-01', status: 'Checked Out', amount: 90 },
        { id: 'bk3', code: '#BK-003', guest: 'Zaidi Izzudin bin Hisham', type: 'Standard Twin', date: '2026-01-02', status: 'Checked Out', amount: 90 },
        { id: 'bk4', code: '#BK-004', guest: 'Siti Aisyah binti Abdul Halim', type: 'Standard Twin', date: '2026-01-02', status: 'Confirmed', amount: 90 },
        { id: 'bk5', code: '#BK-005', guest: 'Shivanya A/P Suresh', type: 'Suite Ocean', date: '2026-01-02', status: 'Confirmed', amount: 250 },
        { id: 'bk6', code: '#BK-006', guest: 'Alya Ixora binti Roslan', type: 'Suite Ocean', date: '2026-01-03', status: 'Confirmed', amount: 250 },
        { id: 'bk7', code: '#BK-007', guest: 'Divya Shine A/P Albert', type: 'Standard Twin', date: '2026-01-10', status: 'Checked Out', amount: 90 },
        { id: 'bk8', code: '#BK-008', guest: 'Aini Farhana binti Anuar', type: 'Standard Twin', date: '2026-01-12', status: 'Confirmed', amount: 90 },
        { id: 'bk9', code: '#BK-009', guest: 'Nurul Afiqah binti Hasanal', type: 'Standard Twin', date: '2026-01-12', status: 'Confirmed', amount: 90 },
        { id: 'bk10', code: '#BK-0010', guest: 'Zulaikha binti Syukor', type: 'Standard Twin', date: '2026-01-24', status: 'Confirmed', amount: 90 },
        { id: 'bk11', code: '#BK-0011', guest: 'Tuan Nur Afzan binti Tuan Azam', type: 'Deluxe King', date: '2026-01-21', status: 'Confirmed', amount: 120 },
        { id: 'bk12', code: '#BK-0012', guest: 'Agatha Angeline Tabed', type: 'Deluxe King', date: '2026-01-28', status: 'Confirmed', amount: 120 },
        { id: 'bk13', code: '#BK-0013', guest: 'Hafizi Lam A/L Anuar', type: 'Deluxe King', date: '2026-01-30', status: 'Checked Out', amount: 120 },
        { id: 'bk14', code: '#BK-0014', guest: 'Syarifah Sumayyah binti Syed Bukhari', type: 'Standard Twin', date: '2026-01-30', status: 'Confirmed', amount: 90 },
        { id: 'bk15', code: '#BK-0015', guest: 'Marsya Adriana binti Mohamad Rafezi', type: 'Deluxe King', date: '2026-01-30', status: 'Confirmed', amount: 120 },
        { id: 'bk16', code: '#BK-0016', guest: 'Ahmad Arsyad bin Muzammil', type: 'Standard Twin', date: '2026-01-30', status: 'Confirmed', amount: 90 },
        { id: 'bk17', code: '#BK-0017', guest: 'Danish Irfan bin Mohamad Afiq', type: 'Standard Twin', date: '2026-01-30', status: 'Confirmed', amount: 90 },
        { id: 'bk18', code: '#BK-0018', guest: 'Sarah binti Abdul Razak', type: 'Standard Twin', date: '2026-01-30', status: 'Confirmed', amount: 90 },
        { id: 'bk19', code: '#BK-0019', guest: 'Sarah binti Abdul Razak', type: 'Standard Twin', date: '2026-02-11', status: 'Confirmed', amount: 90 },
        { id: 'bk20', code: '#BK-0020', guest: 'Ainul Mardiyyah binti Farihin', type: 'Suite Ocean', date: '2026-02-11', status: 'Confirmed', amount: 250 },
        { id: 'bk21', code: '#BK-0021', guest: 'Harinya A/L AArav', type: 'Suite Ocean', date: '2026-02-11', status: 'Checked Out', amount: 250 },
        { id: 'bk22', code: '#BK-0022', guest: 'Ayesha A/P Akash', type: 'Standard Twin', date: '2026-02-11', status: 'Confirmed', amount: 90 },
        { id: 'bk23', code: '#BK-0023', guest: 'Adam Rayyan bin Khairul Nas', type: 'Suite Ocean', date: '2026-02-11', status: 'Confirmed', amount: 250 },
        { id: 'bk24', code: '#BK-0024', guest: 'Nisaa Umayra binti Tarudin', type: 'Suite Ocean', date: '2026-02-11', status: 'Confirmed', amount: 250 },
        { id: 'bk25', code: '#BK-0025', guest: 'Ida Munira binti Abu Bakar', type: 'Standard Twin', date: '2026-02-15', status: 'Checked Out', amount: 90 },
        { id: 'bk26', code: '#BK-0026', guest: 'Puteri Intan binti Muhammmad', type: 'Deluxe King', date: '2026-02-15', status: 'Checked Out', amount: 120 },
        { id: 'bk27', code: '#BK-0027', guest: 'Muhammad Irfan bin Abdullah', type: 'Deluxe King', date: '2026-02-15', status: 'Checked Out', amount: 120 },
        { id: 'bk28', code: '#BK-0028', guest: 'Harith Haiqal bin Rosli', type: 'Deluxe King', date: '2026-02-15', status: 'Confirmed', amount: 120 },
        { id: 'bk29', code: '#BK-0029', guest: 'Arjun A/L Subramaniam', type: 'Standard Twin', date: '2026-02-15', status: 'Confirmed', amount: 90 },
        { id: 'bk30', code: '#BK-0030', guest: 'Nithya A/P Gopal', type: 'Standard Twin', date: '2026-02-15', status: 'Confirmed', amount: 90 },
        { id: 'bk31', code: '#BK-0031', guest: 'Priya A/P Krishnan', type: 'Standard Twin', date: '2026-02-15', status: 'Confirmed', amount: 90 },
        { id: 'bk32', code: '#BK-0032', guest: 'Kavitha A/P Selvam', type: 'Standard Twin', date: '2026-02-15', status: 'Checked Out', amount: 90 },
        { id: 'bk33', code: '#BK-0033', guest: 'Tan Jun Hou', type: 'Deluxe King', date: '2026-02-15', status: 'Confirmed', amount: 120 },
        { id: 'bk34', code: '#BK-0034', guest: 'Lee Xin Yi', type: 'Standard Twin', date: '2026-02-15', status: 'Confirmed', amount: 90 },
        { id: 'bk35', code: '#BK-0035', guest: 'Ong Hui Ling C', type: 'Standard Twin', date: '2026-03-18', status: 'Confirmed', amount: 90 },
        { id: 'bk36', code: '#BK-0036', guest: 'Cheong Mei Shan', type: 'Suite Ocean', date: '2026-03-18', status: 'Confirmed', amount: 250 },
        { id: 'bk37', code: '#BK-0037', guest: 'Yap Jia En', type: 'Suite Ocean', date: '2026-03-18', status: 'Confirmed', amount: 250 },
        { id: 'bk38', code: '#BK-0038', guest: 'Ng Zhen Ming', type: 'Standard Twin', date: '2026-03-18', status: 'Confirmed', amount: 90 },
        { id: 'bk39', code: '#BK-0039', guest: 'Wong Kai Xiang', type: 'Standard Twin', date: '2026-03-18', status: 'Checked Out', amount: 90 },
        { id: 'bk40', code: '#BK-0040', guest: 'Amran bin Abdul Samad', type: 'Deluxe King', date: '2026-03-18', status: 'Confirmed', amount: 120 },
        { id: 'bk41', code: '#BK-0041', guest: 'Lim Wei Jie', type: 'Deluxe King', date: '2026-03-18', status: 'Confirmed', amount: 120 },
        { id: 'bk42', code: '#BK-0042', guest: 'Siti Rahmah binti Syukor', type: 'Deluxe King', date: '2026-03-18', status: 'Confirmed', amount: 120 },
        { id: 'bk43', code: '#BK-0043', guest: 'Ilyana Maisarah binti Hafizuddin', type: 'Deluxe King', date: '2026-03-18', status: 'Confirmed', amount: 120 },
        { id: 'bk44', code: '#BK-0044', guest: 'Syasya Delisha binti Khairul', type: 'Standard Twin', date: '2026-03-18', status: 'Confirmed', amount: 90 },
        { id: 'bk45', code: '#BK-0045', guest: 'Nurul Farhana binti Hairul', type: 'Suite Ocean', date: '2026-03-18', status: 'Confirmed', amount: 250 },
        { id: 'bk46', code: '#BK-0046', guest: 'Ameera Najiha binti Shamsul', type: 'Standard Twin', date: '2026-03-18', status: 'Confirmed', amount: 90 },
        { id: 'bk47', code: '#BK-0047', guest: 'Adriana Qaisara binti Rashid', type: 'Standard Twin', date: '2026-04-09', status: 'Checked Out', amount: 90 },
        { id: 'bk48', code: '#BK-0048', guest: 'Dhia Humairah binti Othman', type: 'Deluxe King', date: '2026-04-09', status: 'Confirmed', amount: 120 },
        { id: 'bk49', code: '#BK-0049', guest: 'Safiyyah Batrisyia binti Norzaidi', type: 'Deluxe King', date: '2026-04-09', status: 'Confirmed', amount: 120 },
        { id: 'bk50', code: '#BK-0050', guest: 'Nadia Zahirah binti Kamaruzaman', type: 'Deluxe King', date: '2026-04-09', status: 'Confirmed', amount: 120 },
        { id: 'bk51', code: '#BK-0051', guest: 'Alya Insyirah binti Suhaimi', type: 'Suite Ocean', date: '2026-04-09', status: 'Confirmed', amount: 250 },
        { id: 'bk52', code: '#BK-0052', guest: 'Qistina Ameera binti Farid', type: 'Standard Twin', date: '2026-04-09', status: 'Confirmed', amount: 90 },
        { id: 'bk53', code: '#BK-0053', guest: 'Nur Damia binti Zulkifli', type: 'Suite Ocean', date: '2026-04-09', status: 'Confirmed', amount: 250 },
        { id: 'bk54', code: '#BK-0054', guest: 'Balqis Humaira binti Azizi', type: 'Suite Ocean', date: '2026-04-09', status: 'Confirmed', amount: 250 },
        { id: 'bk55', code: '#BK-0055', guest: 'Irdina Sofea binti Rosli', type: 'Standard Twin', date: '2026-04-09', status: 'Confirmed', amount: 90 },
        { id: 'bk56', code: '#BK-0056', guest: 'Amirul Hariz bin Hafizuddin', type: 'Standard Twin', date: '2026-04-09', status: 'Confirmed', amount: 90 },
        { id: 'bk57', code: '#BK-0057', guest: 'Syafiq Ammar bin Khairul', type: 'Standard Twin', date: '2026-04-09', status: 'Checked Out', amount: 90 },
        { id: 'bk58', code: '#BK-0058', guest: 'Naqib Izzuddin bin Hairul', type: 'Deluxe King', date: '2026-04-09', status: 'Checked Out', amount: 120 },
        { id: 'bk59', code: '#BK-0059', guest: 'Danial bin Shamsul', type: 'Standard Twin', date: '2026-03-21', status: 'Confirmed', amount: 90 },
        { id: 'bk60', code: '#BK-0060', guest: 'Amira Natasya binti Rashid Rifqi', type: 'Suite Ocean', date: '2026-03-21', status: 'Confirmed', amount: 250 },
        { id: 'bk61', code: '#BK-0061', guest: 'Haziq Aiman bin Najmi', type: 'Standard Twin', date: '2026-03-21', status: 'Confirmed', amount: 90 },
        { id: 'bk62', code: '#BK-0062', guest: 'Ilhan Faris bin Norzaidi', type: 'Standard Twin', date: '2026-03-21', status: 'Confirmed', amount: 90 },
        { id: 'bk63', code: '#BK-0063', guest: 'Mikhail Darwisyah bin Othman', type: 'Standard Twin', date: '2026-03-21', status: 'Confirmed', amount: 90 },
        { id: 'bk64', code: '#BK-0064', guest: 'Zafran Izzad bin Kamal', type: 'Deluxe King', date: '2026-03-21', status: 'Confirmed', amount: 120 },
        { id: 'bk65', code: '#BK-0065', guest: 'Imran Haikal bin Suhaimi', type: 'Deluxe King', date: '2026-03-21', status: 'Confirmed', amount: 120 },
        { id: 'bk66', code: '#BK-0066', guest: 'Aqil Hafizuddin bin Hamdan', type: 'Standard Twin', date: '2026-03-21', status: 'Checked Out', amount: 90 },
        { id: 'bk67', code: '#BK-0067', guest: 'Rayyan Arif bin Azman', type: 'Deluxe King', date: '2026-03-21', status: 'Confirmed', amount: 120 },
        { id: 'bk68', code: '#BK-0068', guest: 'Luqmanul Hakim bin Ismail', type: 'Suite Ocean', date: '2026-03-21', status: 'Checked Out', amount: 250 },
        { id: 'bk69', code: '#BK-0069', guest: 'Harith Haiqal bin Fadzil', type: 'Suite Ocean', date: '2026-03-21', status: 'Confirmed', amount: 250 },
        { id: 'bk70', code: '#BK-0070', guest: 'Ahmad Danish bin Radzi', type: 'Standard Twin', date: '2026-03-21', status: 'Confirmed', amount: 90 },
        { id: 'bk71', code: '#BK-0071', guest: 'Yap Xin Yi', type: 'Deluxe King', date: '2026-04-13', status: 'Confirmed', amount: 120 },
        { id: 'bk72', code: '#BK-0072', guest: 'R. Karthik a/l Ramesh', type: 'Standard Twin', date: '2026-04-13', status: 'Checked Out', amount: 90 },
        { id: 'bk73', code: '#BK-0073', guest: 'Muhammad Syahmi bin Khairul Azhar', type: 'Suite Ocean', date: '2026-04-13', status: 'Confirmed', amount: 250 },
        { id: 'bk74', code: '#BK-0074', guest: 'Siti Nur Amira binti Hassan', type: 'Suite Ocean', date: '2026-04-13', status: 'Confirmed', amount: 250 },
        { id: 'bk75', code: '#BK-0075', guest: 'Chen FeiYu', type: 'Deluxe King', date: '2026-04-13', status: 'Confirmed', amount: 120 },
        { id: 'bk76', code: '#BK-0076', guest: 'Sofya Qistina binti Zulkefli', type: 'Deluxe King', date: '2026-04-13', status: 'Confirmed', amount: 120 },
        { id: 'bk77', code: '#BK-0077', guest: 'Nisha Priya a/p Ramesh', type: 'Deluxe King', date: '2026-04-13', status: 'Confirmed', amount: 120 },
        { id: 'bk78', code: '#BK-0078', guest: 'Kavya Devi a/p Muniandy', type: 'Suite Ocean', date: '2026-04-13', status: 'Confirmed', amount: 250 },
        { id: 'bk79', code: '#BK-0079', guest: 'Lee Hui Xin', type: 'Standard Twin', date: '2026-04-13', status: 'Confirmed', amount: 90 },
        { id: 'bk80', code: '#BK-0080', guest: 'Tan Jia En', type: 'Standard Twin', date: '2026-04-13', status: 'Checked Out', amount: 90 },
        { id: 'bk81', code: '#BK-0081', guest: 'Lim Xin Yi', type: 'Suite Ocean', date: '2026-04-13', status: 'Confirmed', amount: 250 },
        { id: 'bk82', code: '#BK-0082', guest: 'Puteri Aleesa binti Mohd Faiz', type: 'Suite Ocean', date: '2026-04-13', status: 'Confirmed', amount: 250 },
        { id: 'bk83', code: '#BK-0083', guest: 'Alya Damia binti Khairul Anuar', type: 'Suite Ocean', date: '2026-04-13', status: 'Confirmed', amount: 250 },
        { id: 'bk84', code: '#BK-0084', guest: 'Nur Imani Balqis binti Roslan', type: 'Deluxe King', date: '2026-04-13', status: 'Confirmed', amount: 120 },
        { id: 'bk85', code: '#BK-0085', guest: 'Nur Qistina Sofea binti Zulkifli', type: 'Standard Twin', date: '2026-04-13', status: 'Confirmed', amount: 90 },
        { id: 'bk86', code: '#BK-0086', guest: 'Nur Aisyah Humaira binti Mohd Azlan', type: 'Standard Twin', date: '2026-04-13', status: 'Checked Out', amount: 90 },
        { id: 'bk87', code: '#BK-0087', guest: 'Kavin Prakash a/l Ramesh', type: 'Deluxe King', date: '2026-04-13', status: 'Confirmed', amount: 250 },
        { id: 'bk88', code: '#BK-0088', guest: 'Arvind Raj a/l Muniandy', type: 'Standard Twin', date: '2026-04-13', status: 'Confirmed', amount: 90 },
        { id: 'bk89', code: '#BK-0089', guest: 'Lee Zheng Yu', type: 'Standard Twin', date: '2026-04-13', status: 'Checked Out', amount: 90 },
        { id: 'bk90', code: '#BK-0090', guest: 'Tan Jun Hao', type: 'Suite Ocean', date: '2026-05-31', status: 'Confirmed', amount: 250 },
        { id: 'bk91', code: '#BK-0091', guest: 'Lim Wei Jian', type: 'Deluxe King', date: '2026-05-31', status: 'Confirmed', amount: 120 },
        { id: 'bk92', code: '#BK-0092', guest: 'Aqil Fikri bin Mohd Faiz', type: 'Deluxe King', date: '2026-05-31', status: 'Confirmed', amount: 120 },
        { id: 'bk93', code: '#BK-0093', guest: 'Danish Harith bin Khairul Anuar', type: 'Deluxe King', date: '2026-05-31', status: 'Pending', amount: 120 }, 
        { id: 'bk94', code: '#BK-0094', guest: 'Adam Rayyan bin Roslan', type: 'Deluxe King', date: '2026-05-31', status: 'Confirmed', amount: 120 },
        { id: 'bk95', code: '#BK-0095', guest: 'Muhammad Idris Irfan bin Zulkifli', type: 'Deluxe King', date: '2026-05-31', status: 'Confirmed', amount: 120 },
        { id: 'bk96', code: '#BK-0096', guest: 'Muhammad Miqael Hakimi bin Mohd Azlan', type: 'Standard Twin', date: '2026-05-31', status: 'Checked Out', amount: 90 },
        { id: 'bk97', code: '#BK-0097', guest: 'Layla Imani binti Hafiz', type: 'Deluxe King', date: '2026-05-31', status: 'Confirmed', amount: 120 },
        { id: 'bk98', code: '#BK-0098', guest: 'Amelia Rose A/P David Wong', type: 'Standard Twin', date: '2026-05-31', status: 'Confirmed', amount: 90 },
        { id: 'bk99', code: '#BK-0099', guest: 'Kavya Nair A/P Rajan Nair', type: 'Suite Ocean', date: '2026-05-31', status: 'Checked Out', amount: 250 },
        { id: 'bk100', code: '#BK-00100', guest: 'Zara Aulia binti Faizal', type: 'Suite Ocean', date: '2026-05-31', status: 'Checked Out', amount: 250 },
        { id: 'bk101', code: '#BK-00101', guest: 'Hannah Lee A/P Vincent Lee', type: 'Suite Ocean', date: '2026-05-31', status: 'Checked Out', amount: 250 },
        { id: 'bk102', code: '#BK-00102', guest: 'Sara Amani binti Rahman', type: 'Deluxe King', date: '2026-05-31', status: 'Checked Out', amount: 120 },
        { id: 'bk103', code: '#BK-00103', guest: 'Maya Devi A/P Kumar', type: 'Deluxe King', date: '2026-05-31', status: 'Checked Out', amount: 120 },
        { id: 'bk104', code: '#BK-00104', guest: 'Elena Grace A/P Michael Tan', type: 'Deluxe King', date: '2026-06-06', status: 'Checked Out', amount: 120 },
        { id: 'bk105', code: '#BK-00105', guest: 'Sofea Qistina binti Zulkifli', type: 'Suite Ocean', date: '2026-06-06', status: 'Checked Out', amount: 250 },
        { id: 'bk106', code: '#BK-00106', guest: 'Aisyah Humaira binti Azman', type: 'Deluxe King', date: '2026-06-26', status: 'Checked Out', amount: 120 },
        { id: 'bk107', code: '#BK-00107', guest: 'Daniel Lee A/L Vincent Lee', type: 'Suite Ocean', date: '2026-06-26', status: 'Checked Out', amount: 250 },
        { id: 'bk108', code: '#BK-00108', guest: 'Zayn Ameer bin Syahmi', type: 'Suite Ocean', date: '2026-06-26', status: 'Checked Out', amount: 250 },
        { id: 'bk109', code: '#BK-00109', guest: 'Rayyan Fikri bin Hafiz', type: 'Standard Twin', date: '2026-06-06', status: 'Checked Out', amount: 90 },
        { id: 'bk110', code: '#BK-00110', guest: 'Arjun Raj A/L Kumar', type: 'Standard Twin', date: '2026-06-06', status: 'Pending', amount: 90 }, 
        { id: 'bk111', code: '#BK-00111', guest: 'Noah Alexander A/L David Wong', type: 'Suite Ocean', date: '2026-06-20', status: 'Checked Out', amount: 250 },
        { id: 'bk112', code: '#BK-00112', guest: 'Harith Danish bin Faizal', type: 'Standard Twin', date: '2026-06-20', status: 'Checked Out', amount: 90 },
        { id: 'bk113', code: '#BK-00113', guest: 'Aiden Rizqi bin Rahman', type: 'Deluxe King', date: '2026-06-20', status: 'Checked Out', amount: 120 },
        { id: 'bk114', code: '#BK-00114', guest: 'Ethan Daniel A/L Michael Tan', type: 'Standard Twin', date: '2026-06-26', status: 'Checked Out', amount: 90 },
        { id: 'bk115', code: '#BK-00115', guest: 'Idris Hakim bin Zulkifli', type: 'Deluxe King', date: '2026-06-26', status: 'Checked Out', amount: 120 },
        { id: 'bk116', code: '#BK-00116', guest: 'Miqael Irfan bin Azman', type: 'Standard Twin', date: '2026-06-26', status: 'Confirmed', amount: 90 }
    ];
}

// ---MAIN INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    
    // A. LOGIN LOGIC
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;
            if (u === 'admin' && p === 'admin123') {
                window.location.replace('dashboard.html');
            } else {
                const err = document.getElementById('loginError');
                if(err) { err.style.display = 'block'; err.innerText = "Invalid Password. Please try again."; }
            }
        });
    }

    // B. RENDER TABLES & DASHBOARD
    if (document.getElementById('roomsTable')) renderRoomsTable();
    if (document.getElementById('bookingTable')) renderBookingsTable();
    if (document.getElementById('stat-total-bookings')) initDashboard();
});

// --- DASHBOARD LOGIC (Real-time Stats & Charts) ---
function initDashboard() {
    calculateDashboardStats();
    renderCharts();
}

function calculateDashboardStats() {
    const bookings = getBookingsData();
    const rooms = getRoomsData();

    // 1. Total Bookings
    document.getElementById('stat-total-bookings').innerText = bookings.length;

    // 2. Total Revenue , Booking Amount
    let totalRev = 0;
    bookings.forEach(b => totalRev += b.amount);
    document.getElementById('stat-total-revenue').innerText = '$' + totalRev.toLocaleString();

    // 3. Total Rooms
    document.getElementById('stat-total-rooms').innerText = rooms.length;

    // 4. Available Rooms
    let availRm = 0;
    rooms.forEach(r => { if(r.status === 'Available') availRm++; });
    document.getElementById('stat-available-rooms').innerText = availRm;
}

// --- Update (REVENUE GRAPH) ---
function renderCharts() {
    const revenueCtx = document.getElementById('revenueChart');
    const roomCtx = document.getElementById('roomTypeChart');
    
    if (!revenueCtx || !roomCtx) return;

    // --- REVENUE ---
    const bookings = getBookingsData();
    
    // 6 months from 2026 (Jan - Jun)
    let monthlyRevenue = [0, 0, 0, 0, 0, 0]; 
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

    // Loop All Booking
    bookings.forEach(bk => {
        const date = new Date(bk.date); 
        const monthIndex = date.getMonth(); // Jan=0, Feb=1, dst...

        if (monthIndex >= 0 && monthIndex < 6) {
            monthlyRevenue[monthIndex] += bk.amount;
        }
    });

    // Render Line Chart - Revenue
    new Chart(revenueCtx, {
        type: 'line', 
        data: { 
            labels: monthNames, 
            datasets: [{ 
                label: 'Revenue ($)', 
                data: monthlyRevenue,
                borderColor: '#c5a059', 
                backgroundColor: 'rgba(197, 160, 89, 0.1)', 
                borderWidth: 2, 
                fill: true, 
                tension: 0.4,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#c5a059',
                pointRadius: 5
            }] 
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { legend: { display: false } }, 
            scales: { 
                y: { 
                    beginAtZero: true, 
                    grid: { borderDash: [2, 4], color: '#f0f0f0' } 
                }, 
                x: { grid: { display: false } } 
            } 
        }
    });

    // --- ROOM TYPES ---
    const rooms = getRoomsData();
    let counts = { 'Standard': 0, 'Deluxe': 0, 'Suite': 0 };
    
    rooms.forEach(r => {
        let t = r.type.toLowerCase();
        if(t.includes('standard')) counts['Standard']++;
        else if(t.includes('deluxe')) counts['Deluxe']++;
        else if(t.includes('suite')) counts['Suite']++;
    });

    new Chart(roomCtx, {
        type: 'doughnut', 
        data: { 
            labels: ['Standard', 'Deluxe', 'Suite'], 
            datasets: [{ 
                data: [counts['Standard'], counts['Deluxe'], counts['Suite']], 
                backgroundColor: ['#6c757d', '#c5a059', '#212529'], 
                borderWidth: 0 
            }] 
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, cutout: '70%' }
    });
}

// ---ROOMS LOGIC ---
function renderRoomsTable() {
    const rooms = getRoomsData();
    const tbody = document.querySelector('#roomsTable tbody');
    tbody.innerHTML = '';
    
    rooms.forEach(r => {
        let badge = r.status==='Available'?'bg-success':(r.status==='Occupied'?'bg-danger':'bg-warning text-dark');
        const row = document.createElement('tr');
        row.id = 'row-' + r.id;
        row.innerHTML = `
            <td class="fw-bold">${r.no}</td>
            <td>${r.type}</td>
            <td>$${r.price}</td>
            <td><span class="badge ${badge}">${r.status}</span></td>
            <td>
                <button class="btn btn-sm btn-light border text-primary" onclick="editRoom('${r.id}')"><i class="bi bi-pencil"></i></button> 
                <button class="btn btn-sm btn-light border text-danger" onclick="deleteRoom('${r.id}')"><i class="bi bi-trash"></i></button>
            </td>`;
        tbody.appendChild(row);
    });
}

function openAddRoomModal() {
    document.getElementById('addRoomForm').reset();
    new bootstrap.Modal(document.getElementById('addRoomModal')).show();
}

function saveNewRoom() {
    const rooms = getRoomsData();
    const newId = 'room-' + Date.now();
    
    rooms.push({
        id: newId,
        no: document.getElementById('newRoomNo').value,
        type: document.getElementById('newRoomType').value,
        price: parseInt(document.getElementById('newRoomPrice').value),
        status: document.getElementById('newRoomStatus').value
    });
    
    localStorage.setItem('easton_rooms_json', JSON.stringify(rooms));
    renderRoomsTable();
    bootstrap.Modal.getInstance(document.getElementById('addRoomModal')).hide();
}

function editRoom(id) {
    const rooms = getRoomsData();
    const room = rooms.find(r => r.id === id);
    if(!room) return;

    document.getElementById('editRoomId').value = id;
    document.getElementById('editRoomNo').value = room.no;
    document.getElementById('editRoomType').value = room.type;
    document.getElementById('editRoomPrice').value = room.price;
    document.getElementById('editRoomStatus').value = room.status;
    new bootstrap.Modal(document.getElementById('editRoomModal')).show();
}

function saveRoomChanges() {
    const id = document.getElementById('editRoomId').value;
    let rooms = getRoomsData();
    
    rooms = rooms.map(r => {
        if(r.id === id) {
            return { ...r, 
                type: document.getElementById('editRoomType').value, 
                price: parseInt(document.getElementById('editRoomPrice').value), 
                status: document.getElementById('editRoomStatus').value 
            };
        }
        return r;
    });

    localStorage.setItem('easton_rooms_json', JSON.stringify(rooms));
    renderRoomsTable();
    bootstrap.Modal.getInstance(document.getElementById('editRoomModal')).hide();
}

function deleteRoom(id) {
    if(!confirm('Are you sure you want to delete this room?')) return;
    let rooms = getRoomsData();
    rooms = rooms.filter(r => r.id !== id);
    localStorage.setItem('easton_rooms_json', JSON.stringify(rooms));
    renderRoomsTable();
}

// ---BOOKINGS LOGIC ---
let bookingCounter = 2;

function renderBookingsTable() {
    const bookings = getBookingsData();
    const tbody = document.querySelector('#bookingTable tbody');
    tbody.innerHTML = '';
    
   
    bookingCounter = bookings.length;

    bookings.forEach(b => {
        let badge = b.status==='Confirmed'?'bg-primary':(b.status==='Pending'?'bg-secondary':'bg-success');
        const row = document.createElement('tr');
        row.id = 'row-' + b.id;
        row.innerHTML = `
            <td>${b.code}</td>
            <td><div class="d-flex align-items-center"><img src="https://picsum.photos/seed/${b.id}/30/30" class="rounded-circle me-2"><span class="fw-bold guest-name">${b.guest}</span></div></td>
            <td class="room-type">${b.type}</td>
            <td class="checkin-date">${b.date}</td>
            <td><span class="badge ${badge} booking-status">${b.status}</span></td>
            <td class="amount">$${b.amount}</td>
            <td>
                <button class="btn btn-sm btn-light border text-primary" onclick="editBooking('${b.id}')"><i class="bi bi-pencil"></i></button> 
                <button class="btn btn-sm btn-light border text-danger" onclick="deleteBooking('${b.id}')"><i class="bi bi-trash"></i></button>
            </td>`;
        tbody.appendChild(row);
    });
}

function openBookingModal() {
    document.getElementById('bookingForm').reset();
    document.getElementById('bkId').value = '';
    document.getElementById('bookingModalLabel').innerText = "New Booking";
   
    document.getElementById('bkDate').value = new Date().toISOString().split('T')[0];
    new bootstrap.Modal(document.getElementById('bookingModal')).show();
}

function editBooking(id) {
    const bookings = getBookingsData();
    const bk = bookings.find(b => b.id === id);
    if(!bk) return;

    document.getElementById('bkId').value = id;
    document.getElementById('bkGuest').value = bk.guest;
    document.getElementById('bkType').value = bk.type;
    document.getElementById('bkAmount').value = bk.amount;
    document.getElementById('bkDate').value = bk.date;
    document.getElementById('bkStatus').value = bk.status;
    document.getElementById('bookingModalLabel').innerText = "Edit Booking";
    new bootstrap.Modal(document.getElementById('bookingModal')).show();
}

function saveBooking() {
    let bookings = getBookingsData();
    const id = document.getElementById('bkId').value;
    
    const guest = document.getElementById('bkGuest').value;
    const type = document.getElementById('bkType').value;
    const amount = parseInt(document.getElementById('bkAmount').value);
    const date = document.getElementById('bkDate').value;
    const status = document.getElementById('bkStatus').value;

    if(id) {
        bookings = bookings.map(b => {
            if(b.id === id) return { ...b, guest, type, amount, date, status };
            return b;
        });
    } else {
        bookingCounter++;
        bookings.push({
            id: 'bk' + bookingCounter,
            code: '#BK-00' + bookingCounter,
            guest, type, amount, date, status
        });
    }

    localStorage.setItem('easton_bookings_json', JSON.stringify(bookings));
    renderBookingsTable();
    bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
}

function deleteBooking(id) {
    if(!confirm('Are you sure you want to delete this booking?')) return;
    let bookings = getBookingsData();
    bookings = bookings.filter(b => b.id !== id);
    localStorage.setItem('easton_bookings_json', JSON.stringify(bookings));
    renderBookingsTable();
}

// --- FOOTER---
document.addEventListener('DOMContentLoaded', function() {
    const contentWrapper = document.getElementById('page-content-wrapper');
    if(contentWrapper && !document.getElementById('app-footer')) {
        const footer = document.createElement('footer');
        footer.id = 'app-footer';
        footer.className = 'text-center py-4 mt-4 border-top';
        footer.innerHTML = `
            <div class="container-fluid">
                <p class="mb-0 text-muted small">&copy; 2023 <strong>Easton Hotel Management System.</strong></p>
            </div>
        `;
        contentWrapper.appendChild(footer);
    }
});