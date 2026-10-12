# 🏢 Paroshmoni Paribar (পরশমণি পরিবার)
> **Premium Residential Community Application for Paroshmoni Apartment**  
> Serving 14 Residential Flats & 5 Ground-Floor Commercial Shops.

---

## 🎨 Visual Identity & Architecture
Designed in alignment with the modern mobile aesthetic:
- **Palette**: Midnight Slate Carbon (`#0D0F12`), Elevated Cards (`#171A21`), Vibrant Neon Lime Accents (`#D7FF38`), Deep Emerald Residential Green (`#10B981`), and Crisp Clean Ivory surfaces.
- **Top Bar**: Apartment Society Logo & Wordmark on the left, circular member avatar on the right, live role indicator pill, and direct chat/notices triggers.
- **Dual Metric Cards**:
  - `Dues Card`: Displays current month maintenance dues (`₹1,500.00` or `₹0.00 Paid`) with circular arrow link to Maintenance records.
  - `Gate Duty Card`: Displays current assigned flat duty (e.g. `Flat 3B`) with circular arrow link to the Gate Lock Roster.
- **Floating Bottom Nav**: 4 primary destinations (**Home**, **Maintenance**, **Community**, **Account**) housed inside a floating frosted pill bar.
- **Bilingual Support**: Instant 1-tap switching between **English** and **বাংলা (Bengali)** via App Settings.

---

## 👥 5 Community Roles & 1-Click Demo Testing
The application features role-aware permissions and a **1-Click Role Switcher** in the top header:
1. 👑 **Admin** (Subir Roy – Flat 4A): Member directory, role assignments (who is Secretary/Treasurer), add new members, view Past Members archive.
2. 📝 **Secretary** (Anirban Mukherjee – Flat 2B): Publishes notices, schedules meetings, uploads official certificates (CC, Deed, By-laws), and operates the **Fair Random Lottery** for gate duty!
3. 💰 **Financial Officer / Treasurer** (Sourav Ghosh – Flat 1A): Private cash verification queue, approves/rejects member payments, tracks monthly collection totals and private dues list.
4. 🏠 **Resident Member** (Rahul Sen – Flat 3B): Records cash maintenance submissions, downloads self-digital pill receipts, books rooftop terrace with clash protection, votes in polls, chats with neighbors, submits feedback/disputes.
5. 🏪 **Shopkeeper** (Bikash Pal – Shop G-2): Tailored shopkeeper view for ground floor commercial units.

---

## 🚀 Quick Start Guide

### 1. Start the API Server (Node.js + MySQL)
```bash
# In the project directory:
cd server
npm start
```
* **Database Resilience**: Connects automatically to MySQL if configured in `server/.env`. If MySQL is offline, it runs smoothly using a built-in in-memory resilient data store pre-seeded with all 14 flats and 5 shops!

### 2. Start the Mobile Client (React Native / Expo)
```bash
# In a new terminal window:
cd client
npx expo start
```
* Press `w` in terminal to preview in your web browser.
* Scan the QR code using the **Expo Go** app on your Android smartphone.
* Press `a` to run on a connected Android device / emulator.

---

## 🗄️ MySQL Database Setup
The MySQL schema is provided in `server/schema.sql`:
1. Start your local MySQL service (e.g., MySQL Server, XAMPP, or MariaDB).
2. Run `server/schema.sql` to create `paroshmoni_db` and seed the initial community data:
   ```bash
   mysql -u root -p < server/schema.sql
   ```
3. Edit `server/.env` with your MySQL user and password:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=Rohit02165@
   DB_NAME=paroshmoni_db
   DB_PORT=3306
   ```

---

## 🌟 Key Functional Features
- **Cash Maintenance & Digital Pill Receipt**:
  - Cash submission form records handed-over maintenance.
  - Treasurer approves submission in private queue.
  - Resident instantly receives a verified **Digital Pill Bill Receipt** (`PAR-2026-10-004`) with save/download action.
- **Gate Duty & Secretary Random Lottery**:
  - Monthly rotation for 11 PM gate locking coordination.
  - Secretary clicks **"Pick Random Member via Lottery"** to randomly select the next month's residential flat!
- **Zero-Clash Rooftop Terrace Booking**:
  - Select date and slot (Morning / Evening).
  - Automatically prevents overlapping bookings between different flats.
- **Public Complaints & Confidential Disputes**:
  - Residents can file public maintenance tickets or **Confidential Disputes** marked with red lock badges that are only visible to the Secretary and Admin.
- **Vacate Flat & Past Members Archive**:
  - Residents vacating their flat can delete their profile with a reason; the flat is freed for new residents, and their record is archived under **Past Members**.
