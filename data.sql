
CREATE TABLE Patients (
    patient_id INT AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(100),
    patient_number VARCHAR(20),
    patient_address VARCHAR(255),
    doctor_name VARCHAR(100)
);

INSERT INTO Patients (patient_name, patient_number, patient_address, doctor_name) VALUES
('Rahul', '1234567890', 'Mumbai, India', 'Dr. Gopal'),
('Raju', '9876543210', 'Kolkata, India', 'Dr. Pranav'),
('Ram', '5551234567', 'Pune, India', 'Dr. Mahesh'),
('Rampal', '4447890123', 'Chennai, India', 'Dr. Michael'),
('Yadav', '7773332222', 'Surat, India', 'Dr. Johnson');
