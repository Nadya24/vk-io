import Context from './context';

export default class VoteContext extends Context {
	/**
	 * Constructor
	 *
	 * @param {VK}     vk
	 * @param {Object} payload
	 */
	constructor(vk, { type, object: update }) {
		super(vk);

		this.payload = update;

		this.type = 'vote';
		this.subTypes = ['pull_vote'];
	}

	/**
	 * Returns the identifier poll
	 *
	 * @return {number}
	 */
	getId() {
		return this.payload.poll_id;
	}

	/**
	 * Returns the identifier user
	 *
	 * @return {number}
	 */
	getUserId() {
		return this.payload.user_id;
	}

	/**
	 * Returns the identifier owner
	 *
	 * @return {number}
	 */
	getOwnerId() {
		return this.payload.owner_id;
	}

	/**
	 * Returns the identifier option
	 *
	 * @return {number}
	 */
	getOptionId() {
		return this.payload.option_id;
	}
}
