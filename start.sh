python -m venv classroom_env
source classroom_env/bin/activate
pip install -r requirements.txt

python -c "from app import create_db; create_db()"
sqlite3 classroom.db "insert into user(firstname, lastname, username, password, email, phone, create_date) values('admin', 'admin', 'admin', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'admin@admin.am', '123456', '2023-02-01');"
python app.py
