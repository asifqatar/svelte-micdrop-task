export interface BookingData {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: null
  userId: number
  User: User
  venueId: number
  Venue: Venue
  invitationId: string
  acceptedState: number
  tier: number
  listPosition: number
  ethnicity: number
  gender: number
  lastBookedDate: string
  id: number
  name: string
}

export interface User {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: null
  role: number
  firstName: string
  lastName: string
  email: string
  password: string
  PasswordResetToken: string
  performerAvailability: null
  performerProfileId: PerformerProfileID
  performerProfile: PerformerProfile
  temporaryLoginToken: string
  temporaryLoginExpiry: string
  temporaryLoginDestination: string
  showInvitationNotification: boolean
  showInvitationSMS: boolean
  availabilityRequestSMS: boolean
  availabilityRequestNotification: boolean
  paymentMethodPreference: string
}

export interface PerformerProfile {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: null
  ethnicity: number
  gender: number
  description: string
  firstName: string
  lastName: string
  stageName: string
  email: string
  phoneNumber: string
  location: string
  profileImage: string
  website: string
  instagram: string
  facebook: string
  twitter: string
  tikTok: string
  videoLink: string
  venmo: string
  paypal: string
  biography: string
  introCredits: string
  userId: number
  avatarPosition1: string
  avatarPosition2: string
  avatarPosition3: string
  avatarPosition4: string
  avatarPosition5: string
  avatarPosition6: string
  preferredPaymentGateway: string
  showInvitationEmail: boolean
  availabilityRequestsEmail: boolean
  useStageName: boolean
}

export interface PerformerProfileID {
  Int64: number
  Valid: boolean
}

export interface Venue {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  DeletedAt: null
  name: string
  stages: null
  Events: null
  roster: null
  userId: number
  User: User
  address: string
  email: string
  description: string
  instagram: string
  facebook: string
  phone: string
  twitter: string
  image: string
  MailingList: null
}
