import { useState } from 'react'
import { verifyAPI } from '../../services/api'

export default function VerifyPage() {
	const [certificateId, setCertificateId] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [result, setResult] = useState(null)

	const handleVerify = async (e) => {
		e.preventDefault()
		if (!certificateId.trim()) {
			setError('Please enter a certificate ID')
			return
		}

		try {
			setLoading(true)
			setError('')
			setResult(null)
			const response = await verifyAPI.verifyCertificate(certificateId.trim())
			setResult(response.data)
		} catch (err) {
			setError(err.response?.data?.error || err.message || 'Failed to verify certificate')
		} finally {
			setLoading(false)
		}
	}

	const certificate = result?.certificate
	const onchain = result?.onchain

	return (
		<div className="min-h-screen bg-gray-50 py-10 px-4">
			<div className="max-w-3xl mx-auto">
				<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
					<h1 className="text-2xl font-bold text-gray-900">Verify Certificate</h1>
					<p className="text-sm text-gray-500 mt-1">Enter a certificate ID to verify its authenticity.</p>

					<form onSubmit={handleVerify} className="mt-6 flex flex-col sm:flex-row gap-3">
						<input
							type="text"
							value={certificateId}
							onChange={(e) => setCertificateId(e.target.value)}
							placeholder="CERT123456"
							className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6d34d6]"
						/>
						<button
							type="submit"
							disabled={loading}
							className="bg-[#6d34d6] text-white font-semibold px-6 py-3 rounded-xl disabled:opacity-60"
						>
							{loading ? 'Verifying...' : 'Verify'}
						</button>
					</form>

					{error && (
						<div className="mt-4 bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
							{error}
						</div>
					)}
				</div>

				{result && (
					<div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
						<div className="flex items-center justify-between">
							<h2 className="text-lg font-bold text-gray-900">Verification Result</h2>
							<span className={`px-3 py-1 rounded-full text-xs font-semibold ${onchain?.verified ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
								{onchain?.verified ? 'Verified' : 'Not Verified'}
							</span>
						</div>

						<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
							<div>
								<div className="text-gray-500">Certificate ID</div>
								<div className="font-semibold text-gray-900">{certificate?.certificate_id || certificateId}</div>
							</div>
							<div>
								<div className="text-gray-500">Student Name</div>
								<div className="font-semibold text-gray-900">{certificate?.student_name || '-'}</div>
							</div>
							<div>
								<div className="text-gray-500">Course</div>
								<div className="font-semibold text-gray-900">{certificate?.course || '-'}</div>
							</div>
							<div>
								<div className="text-gray-500">Institute</div>
								<div className="font-semibold text-gray-900">{certificate?.institute_name || '-'}</div>
							</div>
							<div>
								<div className="text-gray-500">Issued Date</div>
								<div className="font-semibold text-gray-900">{certificate?.issued_date || '-'}</div>
							</div>
							<div>
								<div className="text-gray-500">Grade</div>
								<div className="font-semibold text-gray-900">{certificate?.grade || '-'}</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
