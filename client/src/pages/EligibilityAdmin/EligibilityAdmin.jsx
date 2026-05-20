import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Styles from './EligibilityAdmin.module.css'

const allDeferrals = [
    { initials: 'JD', color: '#4A90D9', name: 'Jane Doe', id: '#BL-9902', tag: 'Hemoglobin Low', tagType: 'health', sub: 'Last Screening: Oct 12', statusLabel: 'ELIGIBILITY IN', statusValue: '14 Days', statusType: 'days' },
    { initials: 'MK', color: '#27AE60', name: 'Marcus Knight', id: '#BL-4421', tag: 'Travel: Malaria Zone', tagType: 'travel', sub: 'Entry Date: Sep 20', statusLabel: 'ELIGIBILITY IN', statusValue: '182 Days', statusType: 'days' },
    { initials: 'SH', color: '#E67E22', name: 'Sarah Hughes', id: '#BL-1109', tag: 'Medication: Aspirin', tagType: 'meds', sub: 'Wait Period: 48h', statusLabel: 'READY IN', statusValue: '06 Hours', statusType: 'ready' },
    { initials: 'AM', color: '#9B59B6', name: 'Adam Mills', id: '#BL-3301', tag: 'Hemoglobin Low', tagType: 'health', sub: 'Last Screening: Oct 5', statusLabel: 'ELIGIBILITY IN', statusValue: '7 Days', statusType: 'days' },
    { initials: 'LK', color: '#E74C3C', name: 'Laura Kim', id: '#BL-7782', tag: 'Travel: Malaria Zone', tagType: 'travel', sub: 'Entry Date: Oct 1', statusLabel: 'ELIGIBILITY IN', statusValue: '90 Days', statusType: 'days' },
]

const deferralReasons = [
    { label: 'Low Iron / Hemoglobin', pct: 42, color: '#C0111F' },
    { label: 'Recent Travel', pct: 28, color: '#4A90D9' },
    { label: 'Medications', pct: 15, color: '#27AE60' },
    { label: 'Other / Tattoo', pct: 15, color: '#999' },
]

export default function EligibilityAdmin() {
    const navigate = useNavigate()

    // states
    const [showAll, setShowAll] = useState(false)
    const [filterOpen, setFilterOpen] = useState(false)
    const [filterType, setFilterType] = useState('all')
    const [createModal, setCreateModal] = useState(false)
    const [selectedDonor, setSelectedDonor] = useState(null)
    const [toggleEmail, setToggleEmail] = useState(true)
    const [toggleSMS, setToggleSMS] = useState(false)
    const [toast, setToast] = useState(null)
    const [form, setForm] = useState({ name: '', id: '', reason: '', duration: '' })

    const showToast = (msg) => {
        setToast(msg)
        setTimeout(() => setToast(null), 3000)
    }

    const filteredDeferrals = allDeferrals.filter(d => filterType === 'all' || d.tagType === filterType)
    const visibleDeferrals = showAll ? filteredDeferrals : filteredDeferrals.slice(0, 3)

    const handleCreateSubmit = (e) => {
        e.preventDefault()
        setCreateModal(false)
        setForm({ name: '', id: '', reason: '', duration: '' })
        showToast('Deferral created successfully')
    }

    return (
        <main className={`${Styles.main} bg-light p-4 d-flex flex-column gap-4`}>

            {/* Toast */}
            {toast && (
                <div className={Styles.toast}>
                    <i className="fa-solid fa-circle-check"></i> {toast}
                </div>
            )}

            {/* Header */}
            <div className="d-flex flex-row justify-content-between align-items-start">
                <div>
                    <h6 className={Styles.pageTitle}>Eligibility &amp; Deferrals</h6>
                    <p className={Styles.pageSub}>Manage waitlists, travel restrictions, and health deferral protocols.</p>
                </div>
                <div className="d-flex gap-2 position-relative">
                    <button className={`${Styles.btnOutline} d-flex align-items-center gap-2`} onClick={() => setFilterOpen(!filterOpen)}>
                        <i className="fa-solid fa-sliders"></i> Filter View
                    </button>
                    {filterOpen && (
                        <div className={Styles.filterDropdown}>
                            {[
                                { val: 'all', label: 'All Deferrals' },
                                { val: 'health', label: 'Health / Clinical' },
                                { val: 'travel', label: 'Travel' },
                                { val: 'meds', label: 'Medications' },
                            ].map(f => (
                                <div
                                    key={f.val}
                                    className={`${Styles.filterItem} ${filterType === f.val ? Styles.filterItemActive : ''}`}
                                    onClick={() => { setFilterType(f.val); setFilterOpen(false); setShowAll(false) }}
                                >
                                    {f.label}
                                </div>
                            ))}
                        </div>
                    )}
                    <button className={`${Styles.btnPrimary} d-flex align-items-center gap-2`} onClick={() => setCreateModal(true)}>
                        <i className="fa-solid fa-plus"></i> Create Deferral
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <div className={`${Styles.statCard} p-4 h-100`}>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className={Styles.statLabel}>ACTIVE DEFERRALS</span>
                            <span className={Styles.urgentBadge}>Urgent Focus</span>
                        </div>
                        <div className={Styles.statNumber}>1,284</div>
                        <div className={Styles.progressBar}><div className={Styles.progressFill} style={{ width: '65%' }}></div></div>
                        <p className={`${Styles.statNote} mt-2`}>Clinical/Health-based reasons dominate current deferrals.</p>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className={`${Styles.statCard} p-4 h-100`}>
                        <i className="fa-regular fa-clock mb-2" style={{ color: '#4A90D9', fontSize: 22 }}></i>
                        <div className={Styles.statLabel}>ELIGIBLE IN &lt; 7 DAYS</div>
                        <div className={`${Styles.statNumber} mt-1`}>412</div>
                        <span className={Styles.readyBadge}>Ready for Re-engagement</span>
                    </div>
                </div>
                <div className="col-6 col-md-3">
                    <div className={`${Styles.statCard} p-4 h-100`}>
                        <i className="fa-solid fa-earth-americas mb-2" style={{ color: '#27AE60', fontSize: 22 }}></i>
                        <div className={Styles.statLabel}>TRAVEL LOCKS</div>
                        <div className={`${Styles.statNumber} mt-1`}>189</div>
                        <p className={Styles.statNote}>Active endemic zone restrictions.</p>
                    </div>
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="row g-3">
                <div className="col-12 col-lg-8 d-flex flex-column gap-3">

                    {/* Priority List */}
                    <div className={`${Styles.card} p-4`}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className={Styles.cardTitle}>Priority Management List</span>
                            <span className={Styles.cardSub}>Showing {visibleDeferrals.length} of {filteredDeferrals.length}</span>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            {visibleDeferrals.map((d, i) => (
                                <div key={i} className={`${Styles.deferralRow} d-flex align-items-center justify-content-between`}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className={Styles.avatar} style={{ background: d.color }}>{d.initials}</div>
                                        <div>
                                            <div className={Styles.donorName}>{d.name}</div>
                                            <div className={Styles.donorId}>Donor ID: {d.id}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column align-items-start gap-1" style={{ minWidth: 160 }}>
                                        <span className={`${Styles.tag} ${Styles[`tag_${d.tagType}`]}`}>{d.tag}</span>
                                        <span className={Styles.tagSub}>{d.sub}</span>
                                    </div>
                                    <div className="d-flex flex-column align-items-start">
                                        <span className={Styles.eligLabel}>{d.statusLabel}</span>
                                        <span className={d.statusType === 'ready' ? Styles.readyValue : Styles.eligValue}>{d.statusValue}</span>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <button className={Styles.iconBtn} onClick={() => setSelectedDonor(d)}><i className="fa-regular fa-pen-to-square"></i></button>
                                        <button className={Styles.iconBtn} onClick={() => setSelectedDonor(d)}><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-3">
                            <button className={Styles.viewAllBtn} onClick={() => setShowAll(!showAll)}>
                                {showAll ? 'Show Less' : 'View All Active Deferrals'}
                            </button>
                        </div>
                    </div>

                    {/* Re-engagement */}
                    <div className={`${Styles.card} p-4`}>
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <i className="fa-solid fa-wand-magic-sparkles" style={{ color: 'var(--wine-red)' }}></i>
                            <span className={Styles.cardTitle}>Automated Re-engagement</span>
                        </div>
                        <div className="row g-3">
                            <div className="col-6">
                                <div className={`${Styles.toggleCard} d-flex justify-content-between align-items-center`}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className={`${Styles.toggleIcon} ${Styles.toggleIconBlue}`}><i className="fa-regular fa-envelope"></i></div>
                                        <div>
                                            <div className={Styles.toggleTitle}>Eligibility Countdown</div>
                                            <div className={Styles.toggleSub}>Send email 3 days before expiry.</div>
                                        </div>
                                    </div>
                                    <div className={`${Styles.toggle} ${toggleEmail ? Styles.toggleOn : ''}`} onClick={() => { setToggleEmail(!toggleEmail); showToast(`Email reminders ${!toggleEmail ? 'enabled' : 'disabled'}`) }}></div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className={`${Styles.toggleCard} d-flex justify-content-between align-items-center`}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className={`${Styles.toggleIcon} ${Styles.toggleIconGreen}`}><i className="fa-regular fa-message"></i></div>
                                        <div>
                                            <div className={Styles.toggleTitle}>Travel Return Check-in</div>
                                            <div className={Styles.toggleSub}>SMS on estimated return date.</div>
                                        </div>
                                    </div>
                                    <div className={`${Styles.toggle} ${toggleSMS ? Styles.toggleOn : ''}`} onClick={() => { setToggleSMS(!toggleSMS); showToast(`SMS reminders ${!toggleSMS ? 'enabled' : 'disabled'}`) }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-12 col-lg-4 d-flex flex-column gap-3">
                    <div className={`${Styles.card} p-4`}>
                        <div className={`${Styles.cardTitle} mb-3`}>Deferral Reasons</div>
                        <div className="d-flex flex-column gap-3">
                            {deferralReasons.map((r, i) => (
                                <div key={i}>
                                    <div className="d-flex justify-content-between mb-1">
                                        <span className={Styles.reasonLabel}>{r.label}</span>
                                        <span className={Styles.reasonPct}>{r.pct}%</span>
                                    </div>
                                    <div className={Styles.reasonBar}>
                                        <div className={Styles.reasonFill} style={{ width: `${r.pct}%`, background: r.color }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={Styles.alertCard}>
                        <div className={Styles.alertTitle}>Waitlist Growth</div>
                        <p className={Styles.alertText}>Waitlists have increased by 12% this month. Adjust re-engagement cadence?</p>
                        <button className={Styles.alertBtn} onClick={() => navigate('/impact')}>Review Analytics</button>
                    </div>

                    <div className={`${Styles.card} p-4`}>
                        <div className={`${Styles.cardTitle} mb-3`}>ADMIN QUICK ACTIONS</div>
                        <div className="d-flex flex-column gap-2">
                            {[
                                { icon: 'fa-rotate', label: 'Update Global Policy', msg: 'Global policy updated successfully' },
                                { icon: 'fa-download', label: 'Export Deferral Report', msg: 'Report exported successfully' },
                                { icon: 'fa-bullhorn', label: 'Broadcast Health Alert', msg: 'Health alert broadcasted' },
                            ].map((a, i) => (
                                <button key={i} className={`${Styles.quickAction} d-flex justify-content-between align-items-center`} onClick={() => showToast(a.msg)}>
                                    <div className="d-flex align-items-center gap-2">
                                        <i className={`fa-solid ${a.icon}`}></i>
                                        <span>{a.label}</span>
                                    </div>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Deferral Modal */}
            {createModal && (
                <div className={Styles.modalOverlay} onClick={() => setCreateModal(false)}>
                    <div className={Styles.modal} onClick={e => e.stopPropagation()}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h6 className={Styles.modalTitle}>Create New Deferral</h6>
                            <button className={Styles.modalClose} onClick={() => setCreateModal(false)}><i className="fa-solid fa-x"></i></button>
                        </div>
                        <form onSubmit={handleCreateSubmit} className="d-flex flex-column gap-3">
                            <div>
                                <label className={Styles.formLabel}>Donor Name</label>
                                <input className={Styles.formInput} placeholder="e.g. Jane Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                            </div>
                            <div>
                                <label className={Styles.formLabel}>Donor ID</label>
                                <input className={Styles.formInput} placeholder="e.g. #BL-0000" value={form.id} onChange={e => setForm({ ...form, id: e.target.value })} required />
                            </div>
                            <div>
                                <label className={Styles.formLabel}>Deferral Reason</label>
                                <select className={Styles.formInput} value={form.reason} onChange={e => setForm({ ...form, reason: e.target.value })} required>
                                    <option value="">Select reason</option>
                                    <option>Hemoglobin Low</option>
                                    <option>Recent Travel</option>
                                    <option>Medication</option>
                                    <option>Other / Tattoo</option>
                                </select>
                            </div>
                            <div>
                                <label className={Styles.formLabel}>Deferral Duration</label>
                                <input className={Styles.formInput} placeholder="e.g. 14 Days" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} required />
                            </div>
                            <div className="d-flex gap-2 justify-content-end mt-2">
                                <button type="button" className={Styles.btnOutline} onClick={() => setCreateModal(false)}>Cancel</button>
                                <button type="submit" className={Styles.btnPrimary}>Create Deferral</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Donor Detail Modal */}
            {selectedDonor && (
                <div className={Styles.modalOverlay} onClick={() => setSelectedDonor(null)}>
                    <div className={Styles.modal} onClick={e => e.stopPropagation()}>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h6 className={Styles.modalTitle}>Donor Details</h6>
                            <button className={Styles.modalClose} onClick={() => setSelectedDonor(null)}><i className="fa-solid fa-x"></i></button>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className={Styles.avatarLg} style={{ background: selectedDonor.color }}>{selectedDonor.initials}</div>
                            <div>
                                <div className={Styles.donorName}>{selectedDonor.name}</div>
                                <div className={Styles.donorId}>Donor ID: {selectedDonor.id}</div>
                            </div>
                        </div>
                        <div className="d-flex flex-column gap-2">
                            <div className={Styles.detailRow}><span className={Styles.detailLabel}>Deferral Reason</span><span className={`${Styles.tag} ${Styles[`tag_${selectedDonor.tagType}`]}`}>{selectedDonor.tag}</span></div>
                            <div className={Styles.detailRow}><span className={Styles.detailLabel}>Details</span><span className={Styles.detailValue}>{selectedDonor.sub}</span></div>
                            <div className={Styles.detailRow}><span className={Styles.detailLabel}>Status</span><span className={selectedDonor.statusType === 'ready' ? Styles.readyValue : Styles.eligValue}>{selectedDonor.statusLabel}: {selectedDonor.statusValue}</span></div>
                        </div>
                        <div className="d-flex gap-2 justify-content-end mt-4">
                            <button className={Styles.btnOutline} onClick={() => setSelectedDonor(null)}>Close</button>
                            <button className={Styles.btnPrimary} onClick={() => { setSelectedDonor(null); showToast('Donor record updated') }}>Save Changes</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
