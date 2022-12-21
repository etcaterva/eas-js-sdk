/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import BaseDraw from './model/BaseDraw';
import BaseDrawAllOf from './model/BaseDrawAllOf';
import BaseObject from './model/BaseObject';
import BaseResult from './model/BaseResult';
import BaseResultAllOf from './model/BaseResultAllOf';
import Coin from './model/Coin';
import CoinAllOf from './model/CoinAllOf';
import CoinResult from './model/CoinResult';
import CoinResultAllOf from './model/CoinResultAllOf';
import DrawMetadata from './model/DrawMetadata';
import DrawTossPayload from './model/DrawTossPayload';
import Groups from './model/Groups';
import GroupsAllOf from './model/GroupsAllOf';
import GroupsResult from './model/GroupsResult';
import Instagram from './model/Instagram';
import InstagramAllOf from './model/InstagramAllOf';
import InstagramResult from './model/InstagramResult';
import InstagramResultAllOf from './model/InstagramResultAllOf';
import InstagramResultAllOfComment from './model/InstagramResultAllOfComment';
import InstagramResultAllOfValue from './model/InstagramResultAllOfValue';
import Letter from './model/Letter';
import LetterAllOf from './model/LetterAllOf';
import LetterResult from './model/LetterResult';
import LetterResultAllOf from './model/LetterResultAllOf';
import Link from './model/Link';
import LinkAllOf from './model/LinkAllOf';
import LinkResult from './model/LinkResult';
import LinkResultAllOf from './model/LinkResultAllOf';
import LinkResultAllOfValue from './model/LinkResultAllOfValue';
import Lottery from './model/Lottery';
import LotteryAllOf from './model/LotteryAllOf';
import LotteryResult from './model/LotteryResult';
import LotteryResultAllOf from './model/LotteryResultAllOf';
import Participant from './model/Participant';
import ParticipantAllOf from './model/ParticipantAllOf';
import PaypalCreatePayload from './model/PaypalCreatePayload';
import PaypalResponse from './model/PaypalResponse';
import Prize from './model/Prize';
import PrizeAllOf from './model/PrizeAllOf';
import Raffle from './model/Raffle';
import RaffleAllOf from './model/RaffleAllOf';
import RaffleResult from './model/RaffleResult';
import RaffleResultAllOf from './model/RaffleResultAllOf';
import RaffleResultAllOfValue from './model/RaffleResultAllOfValue';
import RandomNumber from './model/RandomNumber';
import RandomNumberAllOf from './model/RandomNumberAllOf';
import RandomNumberResult from './model/RandomNumberResult';
import RandomNumberResultAllOf from './model/RandomNumberResultAllOf';
import SecretSanta from './model/SecretSanta';
import SecretSantaParticipantsInner from './model/SecretSantaParticipantsInner';
import SecretSantaResult from './model/SecretSantaResult';
import Spinner from './model/Spinner';
import SpinnerAllOf from './model/SpinnerAllOf';
import SpinnerResult from './model/SpinnerResult';
import SpinnerResultAllOf from './model/SpinnerResultAllOf';
import Tournament from './model/Tournament';
import TournamentAllOf from './model/TournamentAllOf';
import TournamentResult from './model/TournamentResult';
import TournamentResultAllOf from './model/TournamentResultAllOf';
import CoinApi from './api/CoinApi';
import GroupsApi from './api/GroupsApi';
import InstagramApi from './api/InstagramApi';
import LetterApi from './api/LetterApi';
import LinkApi from './api/LinkApi';
import LotteryApi from './api/LotteryApi';
import PaypalApi from './api/PaypalApi';
import RaffleApi from './api/RaffleApi';
import RandomNumberApi from './api/RandomNumberApi';
import SecretSantaApi from './api/SecretSantaApi';
import SpinnerApi from './api/SpinnerApi';
import TournamentApi from './api/TournamentApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var EchaloasuerteJsSdk = require('index'); // See note below*.
* var xxxSvc = new EchaloasuerteJsSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new EchaloasuerteJsSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new EchaloasuerteJsSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new EchaloasuerteJsSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BaseDraw model constructor.
     * @property {module:model/BaseDraw}
     */
    BaseDraw,

    /**
     * The BaseDrawAllOf model constructor.
     * @property {module:model/BaseDrawAllOf}
     */
    BaseDrawAllOf,

    /**
     * The BaseObject model constructor.
     * @property {module:model/BaseObject}
     */
    BaseObject,

    /**
     * The BaseResult model constructor.
     * @property {module:model/BaseResult}
     */
    BaseResult,

    /**
     * The BaseResultAllOf model constructor.
     * @property {module:model/BaseResultAllOf}
     */
    BaseResultAllOf,

    /**
     * The Coin model constructor.
     * @property {module:model/Coin}
     */
    Coin,

    /**
     * The CoinAllOf model constructor.
     * @property {module:model/CoinAllOf}
     */
    CoinAllOf,

    /**
     * The CoinResult model constructor.
     * @property {module:model/CoinResult}
     */
    CoinResult,

    /**
     * The CoinResultAllOf model constructor.
     * @property {module:model/CoinResultAllOf}
     */
    CoinResultAllOf,

    /**
     * The DrawMetadata model constructor.
     * @property {module:model/DrawMetadata}
     */
    DrawMetadata,

    /**
     * The DrawTossPayload model constructor.
     * @property {module:model/DrawTossPayload}
     */
    DrawTossPayload,

    /**
     * The Groups model constructor.
     * @property {module:model/Groups}
     */
    Groups,

    /**
     * The GroupsAllOf model constructor.
     * @property {module:model/GroupsAllOf}
     */
    GroupsAllOf,

    /**
     * The GroupsResult model constructor.
     * @property {module:model/GroupsResult}
     */
    GroupsResult,

    /**
     * The Instagram model constructor.
     * @property {module:model/Instagram}
     */
    Instagram,

    /**
     * The InstagramAllOf model constructor.
     * @property {module:model/InstagramAllOf}
     */
    InstagramAllOf,

    /**
     * The InstagramResult model constructor.
     * @property {module:model/InstagramResult}
     */
    InstagramResult,

    /**
     * The InstagramResultAllOf model constructor.
     * @property {module:model/InstagramResultAllOf}
     */
    InstagramResultAllOf,

    /**
     * The InstagramResultAllOfComment model constructor.
     * @property {module:model/InstagramResultAllOfComment}
     */
    InstagramResultAllOfComment,

    /**
     * The InstagramResultAllOfValue model constructor.
     * @property {module:model/InstagramResultAllOfValue}
     */
    InstagramResultAllOfValue,

    /**
     * The Letter model constructor.
     * @property {module:model/Letter}
     */
    Letter,

    /**
     * The LetterAllOf model constructor.
     * @property {module:model/LetterAllOf}
     */
    LetterAllOf,

    /**
     * The LetterResult model constructor.
     * @property {module:model/LetterResult}
     */
    LetterResult,

    /**
     * The LetterResultAllOf model constructor.
     * @property {module:model/LetterResultAllOf}
     */
    LetterResultAllOf,

    /**
     * The Link model constructor.
     * @property {module:model/Link}
     */
    Link,

    /**
     * The LinkAllOf model constructor.
     * @property {module:model/LinkAllOf}
     */
    LinkAllOf,

    /**
     * The LinkResult model constructor.
     * @property {module:model/LinkResult}
     */
    LinkResult,

    /**
     * The LinkResultAllOf model constructor.
     * @property {module:model/LinkResultAllOf}
     */
    LinkResultAllOf,

    /**
     * The LinkResultAllOfValue model constructor.
     * @property {module:model/LinkResultAllOfValue}
     */
    LinkResultAllOfValue,

    /**
     * The Lottery model constructor.
     * @property {module:model/Lottery}
     */
    Lottery,

    /**
     * The LotteryAllOf model constructor.
     * @property {module:model/LotteryAllOf}
     */
    LotteryAllOf,

    /**
     * The LotteryResult model constructor.
     * @property {module:model/LotteryResult}
     */
    LotteryResult,

    /**
     * The LotteryResultAllOf model constructor.
     * @property {module:model/LotteryResultAllOf}
     */
    LotteryResultAllOf,

    /**
     * The Participant model constructor.
     * @property {module:model/Participant}
     */
    Participant,

    /**
     * The ParticipantAllOf model constructor.
     * @property {module:model/ParticipantAllOf}
     */
    ParticipantAllOf,

    /**
     * The PaypalCreatePayload model constructor.
     * @property {module:model/PaypalCreatePayload}
     */
    PaypalCreatePayload,

    /**
     * The PaypalResponse model constructor.
     * @property {module:model/PaypalResponse}
     */
    PaypalResponse,

    /**
     * The Prize model constructor.
     * @property {module:model/Prize}
     */
    Prize,

    /**
     * The PrizeAllOf model constructor.
     * @property {module:model/PrizeAllOf}
     */
    PrizeAllOf,

    /**
     * The Raffle model constructor.
     * @property {module:model/Raffle}
     */
    Raffle,

    /**
     * The RaffleAllOf model constructor.
     * @property {module:model/RaffleAllOf}
     */
    RaffleAllOf,

    /**
     * The RaffleResult model constructor.
     * @property {module:model/RaffleResult}
     */
    RaffleResult,

    /**
     * The RaffleResultAllOf model constructor.
     * @property {module:model/RaffleResultAllOf}
     */
    RaffleResultAllOf,

    /**
     * The RaffleResultAllOfValue model constructor.
     * @property {module:model/RaffleResultAllOfValue}
     */
    RaffleResultAllOfValue,

    /**
     * The RandomNumber model constructor.
     * @property {module:model/RandomNumber}
     */
    RandomNumber,

    /**
     * The RandomNumberAllOf model constructor.
     * @property {module:model/RandomNumberAllOf}
     */
    RandomNumberAllOf,

    /**
     * The RandomNumberResult model constructor.
     * @property {module:model/RandomNumberResult}
     */
    RandomNumberResult,

    /**
     * The RandomNumberResultAllOf model constructor.
     * @property {module:model/RandomNumberResultAllOf}
     */
    RandomNumberResultAllOf,

    /**
     * The SecretSanta model constructor.
     * @property {module:model/SecretSanta}
     */
    SecretSanta,

    /**
     * The SecretSantaParticipantsInner model constructor.
     * @property {module:model/SecretSantaParticipantsInner}
     */
    SecretSantaParticipantsInner,

    /**
     * The SecretSantaResult model constructor.
     * @property {module:model/SecretSantaResult}
     */
    SecretSantaResult,

    /**
     * The Spinner model constructor.
     * @property {module:model/Spinner}
     */
    Spinner,

    /**
     * The SpinnerAllOf model constructor.
     * @property {module:model/SpinnerAllOf}
     */
    SpinnerAllOf,

    /**
     * The SpinnerResult model constructor.
     * @property {module:model/SpinnerResult}
     */
    SpinnerResult,

    /**
     * The SpinnerResultAllOf model constructor.
     * @property {module:model/SpinnerResultAllOf}
     */
    SpinnerResultAllOf,

    /**
     * The Tournament model constructor.
     * @property {module:model/Tournament}
     */
    Tournament,

    /**
     * The TournamentAllOf model constructor.
     * @property {module:model/TournamentAllOf}
     */
    TournamentAllOf,

    /**
     * The TournamentResult model constructor.
     * @property {module:model/TournamentResult}
     */
    TournamentResult,

    /**
     * The TournamentResultAllOf model constructor.
     * @property {module:model/TournamentResultAllOf}
     */
    TournamentResultAllOf,

    /**
    * The CoinApi service constructor.
    * @property {module:api/CoinApi}
    */
    CoinApi,

    /**
    * The GroupsApi service constructor.
    * @property {module:api/GroupsApi}
    */
    GroupsApi,

    /**
    * The InstagramApi service constructor.
    * @property {module:api/InstagramApi}
    */
    InstagramApi,

    /**
    * The LetterApi service constructor.
    * @property {module:api/LetterApi}
    */
    LetterApi,

    /**
    * The LinkApi service constructor.
    * @property {module:api/LinkApi}
    */
    LinkApi,

    /**
    * The LotteryApi service constructor.
    * @property {module:api/LotteryApi}
    */
    LotteryApi,

    /**
    * The PaypalApi service constructor.
    * @property {module:api/PaypalApi}
    */
    PaypalApi,

    /**
    * The RaffleApi service constructor.
    * @property {module:api/RaffleApi}
    */
    RaffleApi,

    /**
    * The RandomNumberApi service constructor.
    * @property {module:api/RandomNumberApi}
    */
    RandomNumberApi,

    /**
    * The SecretSantaApi service constructor.
    * @property {module:api/SecretSantaApi}
    */
    SecretSantaApi,

    /**
    * The SpinnerApi service constructor.
    * @property {module:api/SpinnerApi}
    */
    SpinnerApi,

    /**
    * The TournamentApi service constructor.
    * @property {module:api/TournamentApi}
    */
    TournamentApi
};
