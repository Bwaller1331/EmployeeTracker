USE  employeeDB;

INSERT INTO department
    (name)
VALUES 
    ("Marketing"),
    ("Legal"),
    ("Production"),
    ("Financial");

INSERT INTO role 
    (title,salary,department_id)
VALUES 
    ('Marketing Floor',100000,1),
    ("Marketing Super",150000,1),
    ("Legal Team",220000,2),
    ("Legal Head",280000,2),
    ("Production Staff",85000,3),
    ("Production Lead",105000,3),
    ("Financial Team",125000,4),
    ("Financtial Head",165000,4);

INSERT INTO employee
    (last_name,last_name,role_id,manager_id)
VALUES
    ('Sabine','Wren',1,5),
    ('Caleb','Dume',2,NULL),
    ('Hera','Syndulla',3,2),
    ('Chopper',"Asmech",4,NULL);
    
